import React, { FC, useEffect } from 'react';

// components
import TodoList from 'shared/components/TodoList';
import TodoItemWithLoading from './TodoItemWithLoading';

// store
import { useStore } from 'apps/Zustand/store';

const Todos: FC = () => {
    const { isFetching, todos, deleteTodo, updateTodo, fetchTodos } = useStore(state => state.todosState);
    const { filters } = useStore(state => state.filterState);

    useEffect(() => {
        fetchTodos(filters);
    }, [filters, fetchTodos]);

    return (
        <TodoList
            TodoItemComponent={TodoItemWithLoading}
            isFetching={isFetching}
            todos={todos}
            onChange={updateTodo}
            onDelete={deleteTodo}
        />
    );
}

export default Todos;