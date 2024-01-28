import React, { FC } from 'react';

// UI
import { Flex } from '@chakra-ui/react'

// components
import TodoItem from 'shared/components/TodoItem';

// types
import Ttodo from 'shared/api/models/todo';

type TodoListProps = {
    todos: Ttodo[];
    loading: Record<string, boolean>
    onChange: (data: Ttodo) => void;
    onDelete: (data: Ttodo) => void;
}

const TodoList: FC<TodoListProps> = ({ todos, loading, onChange, onDelete }) => {
    return (
        <Flex 
            direction="column" 
            gap={3}
            width="100%"
        >
            {todos.map(todo => 
                <TodoItem
                    isLoading={loading[todo.id]}
                    key={todo.id}
                    todo={todo} 
                    onChange={onChange}
                    onDelete={onDelete}
                />
            )}
        </Flex>
    );
}

export default TodoList;
