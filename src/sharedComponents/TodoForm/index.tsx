import React, { FC, useRef } from "react";
import { v4 as uuid4 } from 'uuid'

// components
import FormField from "sharedComponents/FormField";
import { Button, Box, InputGroup, InputRightElement } from "@chakra-ui/react";
import Form from "sharedComponents/Form";

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

    const onSubmitHandler = (data: IFormInput) => {        
        const newTodo: Ttodo = {
            id: uuid4(),
            title: data?.todo || '',
            status: "active",
            createdAt: new Date().toISOString()
        }
        
        onSubmit(newTodo)
        formRef?.current?.reset({ todo: '' });
    }

    return(
        <Form 
            formRef={formRef} 
            onSubmit={onSubmitHandler} 
            formConfig={{ defaultValues: { todo: '' } }}
        >
            {({ control }) => (
                <Box 
                    display="flex" 
                    alignItems="center" 
                    gap={2}
                >
                    <InputGroup size='md'>
                        <FormField.Input
                            name="todo"
                            control={control}
                            placeholder="Add Todo..."
                            rules={{ required: "This field is required" }} 
                        />
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
            )}
        </Form>
    )
}

export default TodoForm;