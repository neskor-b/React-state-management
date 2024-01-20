import React, { FC, useRef, useEffect } from 'react';

// UI
import { Card, CardBody, Checkbox, Flex, Input, IconButton } from '@chakra-ui/react'
import { EditIcon, CheckIcon, CloseIcon } from '@chakra-ui/icons'

// hooks
import useTodo from 'hooks/useTodo';

// utils
import { getCartStyles } from 'sharedComponents/TodoItem/utils';

// data
import { MODE, CHECKED, INPUT_MODE } from 'sharedComponents/TodoItem/constants'


// types
import Ttodo from 'types/todo';

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
        <Card {...getCartStyles({ isInvalid, mode })} mb={5}>
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
                    <Input
                        ref={inputRef}
                        variant={INPUT_MODE[mode]}
                        value={todo.title}
                        disabled={mode === MODE.view}
                        _disabled={{
                            color: 'Black',
                            height: '40px',
                            paddingLeft: '16px'
                        }}
                        onChange={onChangeTitle}
                    />
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
    );
};

export default TodoItem;