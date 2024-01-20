import React, { FC, useRef } from "react";
import { v4 as uuid4 } from 'uuid'

// components
import FormField from "sharedComponents/FormField";
import { Button, Box, InputGroup, Input, InputRightElement } from "@chakra-ui/react";
import Form from "sharedComponents/Form";

// Hhooks
import useCustomEvent, { EVENT_NAMES } from 'hooks/useCustomEvent';
import useClickOutside from 'hooks/useClickOutside';

// types
import Ttodo from "types/todo";

type TodoFormProps = {
    onSubmit: (data: Ttodo) => void,
}

type IFormInput = {
    todo?: string
}

const TodoForm: FC<TodoFormProps> = ({ onSubmit }) => {
    const formRef = useRef<any>(null);
    const clickOutsideRef = useRef(null);

    const { reset } = formRef.current || {}

    useClickOutside(clickOutsideRef, () => reset && reset());

    const { dispatchCustomEvent } = useCustomEvent<string>({
        eventName: EVENT_NAMES.TODO_FOCUS,
        callback: () => reset && reset()
    })

    const onSubmitHandler = (data: IFormInput) => {    
        const newTodo: Ttodo = {
            id: uuid4(),
            title: data?.todo || '',
            status: "active",
            createdAt: new Date().toISOString()
        }
        onSubmit(newTodo)
        reset({ todo: '' });
        dispatchCustomEvent('');
    }

    return(
        <Form 
            formRef={formRef} 
            onSubmit={onSubmitHandler} 
            formConfig={{ defaultValues: { todo: '' } }}
        >
            <Box 
                display="flex" 
                alignItems="center" 
                gap={2}
                ref={clickOutsideRef}
            >
                <InputGroup size='md'>
                    <FormField.Field
                        name="todo"
                        rules={{ required: "This field is required" }}
                    >
                        {({ formState, ...rest }) => {
                            return (
                                <Input
                                    placeholder="Add Todo..."
                                    _focus={{
                                        border: "2px solid",
                                        borderColor: formState.errors.todo ? 'red.500' : 'blue.500',
                                        boxShadow: 'rgba(0, 0, 0, 0.24) 0px 3px 8px'
                                    }}
                                    _active={{
                                        border: "2px solid",
                                        borderColor: formState.errors.todo? 'red.500' : 'blue.500',
                                        boxShadow: 'rgba(0, 0, 0, 0.24) 0px 3px 8px'
                                    }}
                                    {...rest}
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
    )
}

export default TodoForm;