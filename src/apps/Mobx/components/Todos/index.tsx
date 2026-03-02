import React, { FC, useEffect } from 'react';
import { observer } from "mobx-react-lite"

// hooks
import useStore from 'apps/Mobx/hooks/useStore';

// utils
import { prepareQuery } from 'shared/utils/query';

// components
import TodoList from 'shared/components/TodoList';
import TodoItemWithLoading from './TodoItemWithLoading';

const Todos: FC = () => {
    const { isFetching, items, filters, updateTodo, deleteTodo, fetchTodos } = useStore('todos');

    useEffect(() => {
        fetchTodos(prepareQuery({ filters }));
    }, [])

    return (
        <TodoList
            TodoItemComponent={TodoItemWithLoading}
            isFetching={isFetching}
            todos={items}
            onChange={updateTodo}
            onDelete={deleteTodo}
        />
    );
}


export default observer(Todos);