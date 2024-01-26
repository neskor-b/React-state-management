import React, { FC, useRef, useEffect, useState } from 'react';

// UI
import { CardBody, Checkbox, Flex, Text, IconButton, useColorMode, useToast } from '@chakra-ui/react'
import { EditIcon, CheckIcon, CloseIcon, DeleteIcon } from '@chakra-ui/icons'

// components
import Spinner from 'shared/components/Spinner';
import ConfirmAlert from 'shared/components/ConfirmAlert';
import Form from 'shared/components/Form';
import FormField from 'shared/components/FormField';

// hooks
import useCustomEvent, { EVENT_NAMES } from 'shared/hooks/useCustomEvent';

// data
import { MODE, CHECKED } from 'shared/components/TodoItem/constants'

// styled
import { StyledCard } from './styled';


// types
import Ttodo from 'shared/types/todo';

type TodoItemProps = {
    todo: Ttodo,
    isLoading: boolean,
    onChange: (data: Ttodo) => void,
    onDelete: (data: Ttodo) => void,
}


const TodoItem: FC<TodoItemProps> = ({ todo, isLoading, onChange, onDelete }) => {
    const inputRef = useRef<HTMLInputElement>(null);
    const formRef = useRef<any>(null);

    const toast = useToast();

    const [mode, setMode] = useState<keyof typeof MODE>(MODE.view);
    const { colorMode } = useColorMode();

    const onFormSubmit = (values: Ttodo) => {
        setMode(MODE.view);
        onChange(values)
    }

    const onFormError = (errors: Record<keyof Ttodo, { message: string }>) => {
        Object.keys(errors).forEach(key => {
            toast({
                description: errors[key as keyof Ttodo]?.message || 'Unknown error',
                status: 'warning',
                duration: 3000
            })
        })
    }

    const resetTodo = () => {
        formRef?.current?.reset()
        setMode(MODE.view);
    };

    const { dispatchCustomEvent } = useCustomEvent<string>({
        eventName: EVENT_NAMES.TODO_FOCUS,
        callback: (todoId: string) => {
            if (todoId !== todo.id && mode === MODE.edit) {
                resetTodo();
            }
        }
    })

    const enableEditMode = () => {
        setMode(MODE.edit)
        dispatchCustomEvent(todo.id);
    };

    const onDeleteTodo = () => {
        onDelete(todo);
        resetTodo();
        dispatchCustomEvent(todo.id);
    };
    
    useEffect(() => {
        if (mode === MODE.edit, inputRef.current) {
            inputRef.current.focus();            
        }
    }, [mode]);

    const isViewMode = mode === MODE.view;
    const isEditMode = mode === MODE.edit;

    return (
        <Spinner isLoading={isLoading}>
            <Form 
                formRef={formRef} 
                onSubmit={onFormSubmit} 
                onError={onFormError}
                formConfig={{ defaultValues: todo }}
            >
                {({ formState }) => (
                    <StyledCard 
                        isInvalid={!formState.isValid && isEditMode} 
                        mode={mode} 
                        status={todo.status} 
                        colorMode={colorMode}
                    >
                        <CardBody>
                
                            <Flex 
                                gap={2} 
                                align="center"
                            >
                                <FormField.Field
                                    name="status"
                                    wrapperStyles={{ width: 'fit-content', height: '20.4px' }}
                                >
                                    {({ getValues, setValue }) => (
                                        <Checkbox 
                                            isChecked={CHECKED[todo.status]}
                                            disabled={isLoading}
                                            size="lg"
                                            onChange={e => {
                                                setValue('status',e.target.checked ? 'completed' : 'active');
                                                setValue('title', todo.title);
                                                formRef?.current?.submitForm(getValues());
                                            }}
                                        />
                                    )}
                                </FormField.Field>
                                {isViewMode && (
                                    <Text 
                                        pl="16px" 
                                        lineHeight="40.8px"
                                        flex={1}>
                                        {todo.title}
                                    </Text>
                                )
                
                                }
                                {mode === MODE.edit && (
                                    <FormField.Input
                                        name="title"
                                        placeholder="Add Todo..."
                                        hideErrorMessage
                                        rules={{ required: "Title can't be empty!" }}
                                    />
                                )}
                                {isViewMode && (
                                    <IconButton 
                                        aria-label='toggle edit' 
                                        icon={<EditIcon />} 
                                        size="sm"
                                        onClick={enableEditMode}
                                    />
                                )}
                                {isEditMode && (
                                    <IconButton 
                                        aria-label='submit title' 
                                        icon={<CheckIcon />} 
                                        size="sm"
                                        type='submit'
                                    />
                                )}
                                {isEditMode && (
                                    <IconButton 
                                        aria-label='reset todo' 
                                        icon={<CloseIcon />} 
                                        size="sm"
                                        onClick={resetTodo}
                                    />
                                )}
                                {isViewMode && (
                                    <ConfirmAlert 
                                        text="Are you sure you want to delete this todo?"
                                        headerText="Delete Todo" 
                                        cancelText="Cancel"
                                        confirmText="Delete"
                                        onConfirm={onDeleteTodo}
                                    >
                                        <IconButton 
                                            aria-label='delete todo' 
                                            icon={<DeleteIcon />} 
                                            size="sm"
                                        />
                                    </ConfirmAlert>
                                )}
                            </Flex>
                        </CardBody>
                    </StyledCard>
                )}
            </Form>

        </Spinner>

    );
};

export default TodoItem;