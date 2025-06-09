import React, { FC, useEffect } from 'react';

// components
import TodoList from 'shared/components/TodoList';

// store
import { useStore } from 'apps/Zustand/store';

const Todos: FC = () => {
    const { loading, isFetching, todos, deleteTodo, updateTodo, fetchTodos } = useStore(state => state.todosState);
    const { filters } = useStore(state => state.filterState);

    useEffect(() => {
        fetchTodos(filters);
    }, [filters]);

    return (
        <TodoList
            loading={loading}
            isFecthing={isFetching}
            todos={todos} 
            onChange={updateTodo}
            onDelete={deleteTodo}
        />
    );
}

export default Todos;