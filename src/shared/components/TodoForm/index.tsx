import React, { FC, useRef } from "react";

// components
import FormField from "shared/components/FormField";
import { Button, Box, InputGroup, Input, InputRightElement } from "@chakra-ui/react";
import Form from "shared/components/Form";
import Spinner from "shared/components/Spinner";

// hooks
import useCustomEvent, { EVENT_NAMES } from 'shared/hooks/useCustomEvent';
import useClickOutside from 'shared/hooks/useClickOutside';

// utils
import { showToast } from 'shared/components/Toast';

// types
import TCreateTodo from "shared/api/models/createTodo";

type TodoFormProps = {
    onSubmit: (data: TCreateTodo) => void,
    isLoading: boolean,
}

type TFormValues = {
    title?: string
}

const TodoForm: FC<TodoFormProps> = ({ onSubmit, isLoading }) => {
    const formRef = useRef<any>(null);
    const clickOutsideRef = useRef(null);

    useClickOutside(clickOutsideRef, () => formRef.current?.reset());

    const { dispatchCustomEvent } = useCustomEvent<string>({
        eventName: EVENT_NAMES.TODO_FOCUS,
        callback: () => formRef.current?.reset()
    })

    const onSubmitHandler = ({ title }: TFormValues) => {    
        const newTodo: TCreateTodo = {
            title: title || '',
            status: "active",
            createdAt: new Date().toISOString()
        }
        onSubmit(newTodo)
        formRef.current?.reset({ title: '' });
        dispatchCustomEvent('');
    }

    const onFormError = () => {
        showToast({
            description: 'You neet to enter todo name!',
            status: 'warning',
            duration: 3000
        })
    }


    return(
        <Spinner isLoading={isLoading}>
            <Form 
                formRef={formRef} 
                onSubmit={onSubmitHandler} 
                onError={onFormError}
                formConfig={{ defaultValues: { title: '' } }}
            >
                <Box 
                    display="flex" 
                    alignItems="center" 
                    mb={3}
                    ref={clickOutsideRef}
                >
                    <InputGroup size='md'>
                        <FormField.Field
                            name="title"
                            hideErrorMessage
                            rules={{ required: true }}
                        >
                            {({ formData, input }) => {
                                return (
                                    <Input
                                        placeholder="Add Todo..."
                                        _focus={{
                                            border: "2px solid",
                                            borderColor: formData.formState.errors.title ? 'red.500' : 'blue.500',
                                            boxShadow: 'rgba(0, 0, 0, 0.24) 0px 3px 8px'
                                        }}
                                        _active={{
                                            border: "2px solid",
                                            borderColor: formData.formState.errors.title? 'red.500' : 'blue.500',
                                            boxShadow: 'rgba(0, 0, 0, 0.24) 0px 3px 8px'
                                        }}
                                        {...input}
                                    />
                                )
                            }}
                        </FormField.Field>

                        <InputRightElement width='4.5rem'>
                            <Button
                                h='1.75rem'
                                size='sm'
                                type="submit"
                            >
                                Add
                            </Button>
                        </InputRightElement>
                    </InputGroup>
                </Box>
            </Form>
        </Spinner>

    )
}

export default TodoForm;