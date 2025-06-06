import React, { FC, useEffect } from 'react';

// redux
import { updateTodo, deleteTodo, fetchTodos } from 'apps/Redux/store/slices/todosSlice';
import { useAppSelector, useAppDispatch } from 'apps/Redux/store';

// components
import TodoList from 'shared/components/TodoList';

// utils
import { prepareQuery } from 'shared/utils/query';

// types
import Ttodo from 'shared/api/models/todo';
import TQuery from 'shared/api/models/query';


const Todos: FC = () => {
    const dispatch = useAppDispatch();
    const { loading, isFetching, items, filters, onUpdate, onDelete, onFetch } = {
        ...useAppSelector(state => state.todos),
        onUpdate: (data: Ttodo) => dispatch(updateTodo(data)),
        onDelete: (data: Ttodo) => dispatch(deleteTodo(data)),
        onFetch: (query?: TQuery) => dispatch(fetchTodos(query))
    }

    useEffect(() => {
        onFetch(prepareQuery({ filters }));
    }, [filters]);

    return (
        <TodoList
            loading={loading}
            isFecthing={isFetching}
            todos={items} 
            onChange={onUpdate}
            onDelete={onDelete}
        />
    );
}

export default Todos;