import React, { FC } from 'react';

// UI
import { Flex } from '@chakra-ui/react'

// components
import TodoItem from 'sharedComponents/TodoItem';

// types
import Ttodo from 'types/todo';

type TodoListProps = {
    todos: Record<string, Ttodo>;
    loading: Record<string, boolean>
    onChange: (data: Ttodo) => void;
}

const TodoList: FC<TodoListProps> = ({ todos, loading, onChange }) => {
    return (
        <Flex direction="column" gap={5}>
            {Object.keys(todos).map((todoId: any) => 
                <TodoItem
                    isLoading={loading[todoId]}
                    key={todoId}
                    todo={todos[todoId]} 
                    onChange={onChange}
                />
            )}
        </Flex>
    );
}

export default TodoList;
