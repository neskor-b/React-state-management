import React, { FC, useEffect, useCallback } from 'react';

// redux
import { updateTodo, deleteTodo, fetchTodos } from 'apps/Redux/store/slices/todosSlice';
import { useAppSelector, useAppDispatch } from 'apps/Redux/store';

// components
import TodoList from 'shared/components/TodoList';
import TodoItemWithLoading from './TodoItemWithLoading';

// utils
import { prepareQuery } from 'shared/utils/query';

// types
import Ttodo from 'shared/api/models/todo';


const Todos: FC = () => {
    const dispatch = useAppDispatch();
    const items = useAppSelector(state => state.todos.items);
    const isFetching = useAppSelector(state => state.todos.isFetching);
    const filters = useAppSelector(state => state.todos.filters);

    const onUpdate = useCallback((data: Ttodo) => dispatch(updateTodo(data)), [dispatch]);
    const onDelete = useCallback((data: Ttodo) => dispatch(deleteTodo(data)), [dispatch]);

    useEffect(() => {
        dispatch(fetchTodos(prepareQuery({ filters })));
    }, [filters, dispatch]);

    return (
        <TodoList
            TodoItemComponent={TodoItemWithLoading}
            isFetching={isFetching}
            todos={items}
            onChange={onUpdate}
            onDelete={onDelete}
        />
    );
}

export default Todos;