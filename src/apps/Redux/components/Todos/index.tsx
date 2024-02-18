import React, { FC, useEffect } from 'react';

// redux
import { updateTodo, deleteTodo, fetchTodos } from 'apps/Redux/store/slices/todosSlice';
import { useAppSelector, useAppDispatch } from 'apps/Redux/store';

// components
import TodoList from 'shared/components/TodoList';

// types
import Ttodo from 'shared/api/models/todo';
import TQuery from 'shared/api/models/query';


const Todos: FC = () => {
    const dispatch = useAppDispatch();
    const model = {
        ...useAppSelector(state => state.todos),
        updateTodo: (data: Ttodo) => dispatch(updateTodo(data)),
        deleteTodo: (data: Ttodo) => dispatch(deleteTodo(data)),
        fetchTodos: (query?: TQuery) => dispatch(fetchTodos(query))
    }

    useEffect(() => {
        model.fetchTodos(model.filters);
    }, [model.filters]);

    return (
        <TodoList
            loading={model.loading}
            isFecthing={model.isFetching}
            todos={model.items} 
            onChange={model.updateTodo}
            onDelete={model.deleteTodo}
        />
    );
}

export default Todos;