import React, { FC, useRef, useEffect } from 'react';

// UI
import { Card, CardBody, Checkbox, Flex, Input, Text, IconButton, useColorMode } from '@chakra-ui/react'
import { EditIcon, CheckIcon, CloseIcon } from '@chakra-ui/icons'
import Spinner from 'shared/components/Spinner';

// hooks
import useTodo from 'shared/hooks/useTodo';

// utils
import { getCartStyles } from 'shared/components/TodoItem/utils';

// data
import { MODE, CHECKED, INPUT_MODE } from 'shared/components/TodoItem/constants'


// types
import Ttodo from 'shared/types/todo';

type TodoItemProps = {
    todo: Ttodo,
    isLoading: boolean,
    onChange: (data: Ttodo) => void,
}


export const ICONS = {
    [MODE.edit]: <CheckIcon />,
    [MODE.view]: <EditIcon />
}


const TodoItem: FC<TodoItemProps> = ({ todo: initialData, isLoading, onChange }) => {
    const inputRef = useRef<HTMLInputElement>(null);
    const { colorMode } = useColorMode();

    const {  
        mode,
        todo,
        isInvalid,
        onChangeTitle,
        onSubmitTitle,
        onChangeStatus,
        resetTodo
    } = useTodo({ initialData, onSumbitTodo: onChange });


    useEffect(() => {
        if (mode === MODE.edit, inputRef.current) {
            inputRef.current.focus();            
        }
    }, [mode]);


    return (
        <Spinner isLoading={isLoading}>
            <Card {...getCartStyles({ isInvalid, mode, status: todo.status, colorMode })}>
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
                        {mode === MODE.view && 
                            <Text 
                                pl="16px" 
                                flex={1}>
                                {todo.title}
                            </Text>}
                        {mode === MODE.edit && (
                            <Input
                                ref={inputRef}
                                variant={INPUT_MODE[mode]}
                                value={todo.title}
                                onChange={onChangeTitle}
                            />
                        )}
                        <IconButton 
                            aria-label='edit todo' 
                            icon={ICONS[mode]} 
                            size="sm"
                            onClick={onSubmitTitle}
                        />
                        {mode === MODE.edit && (
                            <IconButton 
                                aria-label='edit todo' 
                                icon={<CloseIcon />} 
                                size="sm"
                                onClick={resetTodo}
                            />
                        )}
                    </Flex>

                </CardBody>
            </Card>
        </Spinner>

    );
};

export default TodoItem;