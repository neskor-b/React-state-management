import React, { useState, FC } from 'react';

// UI
import { Card, CardBody, Text, Checkbox, Flex } from '@chakra-ui/react'

// types
import Ttodo from 'types/todo';

type TodoItemProps = {
    todo: Ttodo
}

const MODE = {
    view: 'view',
    edit: 'edit'
} as const;

const CHECKED: Record<Ttodo['status'], boolean> = {
    active: false,
    completed: true
}

const TodoItem: FC<TodoItemProps> = ({ todo }) => {
    const [mode, setMode] = useState<keyof typeof MODE>(MODE.view);
    console.log({todo, mode, setMode})
    return (
        <Card>
            <CardBody>
                <Flex 
                    gap={2} 
                    align="center"
                >
                    <Checkbox isChecked={CHECKED[todo.status]}/>
                    <Text>{todo.title}</Text>
                </Flex>
            </CardBody>
        </Card>
    );
};

export default TodoItem;