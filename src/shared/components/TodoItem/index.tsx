import React, { FC, useRef, useEffect, useState, ChangeEvent } from 'react';

// UI
import { CardBody, Checkbox, Flex, Input, Text, IconButton, useColorMode, useToast } from '@chakra-ui/react'
import { EditIcon, CheckIcon, CloseIcon, DeleteIcon } from '@chakra-ui/icons'
import Spinner from 'shared/components/Spinner';
import ConfirmAlert from 'shared/components/ConfirmAlert';

// utils
import { validateTodo } from 'shared/components/TodoItem/utils';

// hooks
import useCustomEvent, { EVENT_NAMES } from 'shared/hooks/useCustomEvent';

// data
import { MODE, CHECKED, INPUT_MODE } from 'shared/components/TodoItem/constants'

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
    const [mode, setMode] = useState<keyof typeof MODE>(MODE.view);
    const [title, setTitle] = useState(todo.title);
    const [isInvalid, setIsInvalid] = useState(false);
    const { colorMode } = useColorMode();
    const toast = useToast()
    
    const onTitleChange = (event: ChangeEvent<HTMLInputElement>) => setTitle(event.target.value);

    const onSubmitTitle = () => {
        if (isInvalid){
            toast({
                description: "Title can't be empty!",
                status: 'warning',
                duration: 3000,
                isClosable: true
            });
        } else {
            onChange({ ...todo, title });
            setMode(MODE.view);
        }

    }

    const resetTodo = () => {
        setMode(MODE.view);
        setTitle(todo.title);
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

    const onChangeStatus = () => {
        onChange({ ...todo, status: todo.status === 'active' ? 'completed' : 'active'});
        resetTodo();
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

    useEffect(() => {
        setIsInvalid(validateTodo(title));
    }, [title])

    const isViewMode = mode === MODE.view;
    const isEditMode = mode === MODE.edit;

    return (
        <Spinner isLoading={isLoading}>
            <StyledCard 
                isInvalid={isInvalid} 
                mode={mode} 
                status={todo.status} 
                colorMode={colorMode}
            >
                <CardBody>
                    <Flex 
                        gap={2} 
                        align="center"
                    >
                        <Checkbox 
                            isChecked={CHECKED[todo.status]}
                            disabled={isLoading || isInvalid}
                            size="lg"
                            onChange={onChangeStatus}
                        />
                        {isViewMode && 
                            <Text 
                                pl="16px" 
                                lineHeight="40.8px"
                                flex={1}>
                                {todo.title}
                            </Text>}
                        {mode === MODE.edit && (
                            <Input
                                ref={inputRef}
                                variant={INPUT_MODE[mode]}
                                value={title}
                                onChange={onTitleChange}
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
                                onClick={onSubmitTitle}
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
        </Spinner>

    );
};

export default TodoItem;