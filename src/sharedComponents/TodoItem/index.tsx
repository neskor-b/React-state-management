import React, { FC, useRef, useEffect } from 'react';

// UI
import { Card, CardBody, Checkbox, Flex, Input, IconButton } from '@chakra-ui/react'
import { EditIcon, CheckIcon, CloseIcon } from '@chakra-ui/icons'

// hooks
import useTodo from 'hooks/useTodo';


// types
import Ttodo from 'types/todo';

type TodoItemProps = {
    todo: Ttodo,
    isLoading: boolean,
    onChange: (data: Ttodo) => void,
}

const MODE = {
    view: 'view',
    edit: 'edit'
} as const;

const INPUT_MODE = {
    [MODE.edit]: 'outline',
    [MODE.view]: 'unstyled'
} as const;

const CHECKED: Record<Ttodo['status'], boolean> = {
    active: false,
    completed: true
}

const ICONS = {
    [MODE.edit]: <CheckIcon />,
    [MODE.view]: <EditIcon />
}


const TodoItem: FC<TodoItemProps> = ({ todo: initialData, isLoading, onChange }) => {
    const inputRef = useRef<HTMLInputElement>(null);

    const {  
        mode,
        todo,
        onChangeTitle,
        onSubmitTitle,
        onChangeChecked,
        resetTodo
    } = useTodo({ initialData, onSumbitTodo: onChange });


    useEffect(() => {
        if (mode === MODE.edit, inputRef.current) {
            inputRef.current.focus();            
        }
    }, [mode]);

    return (
        <Card>
            <CardBody>
                <Flex 
                    gap={2} 
                    align="center"
                >
                    <Checkbox 
                        isChecked={CHECKED[todo.status]}
                        disabled={isLoading}
                        size="lg"
                        onChange={onChangeChecked}
                    />
                    <Input
                        ref={inputRef}
                        variant={INPUT_MODE[mode]}
                        value={todo.title}
                        disabled={mode === MODE.view}
                        isInvalid={!todo.title}
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