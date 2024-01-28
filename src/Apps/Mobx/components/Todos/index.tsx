import React, { FC, useEffect } from 'react';
import { observer } from "mobx-react-lite"

// hooks
import useStore from 'apps/Mobx/hooks/useStore';

// components
import TodoList from 'shared/components/TodoList';
import makeApiCall from 'shared/api';


const Todos: FC = () => {
    const model = useStore('todos');
    useEffect(() => {
        makeApiCall.get('/todos')
    }, [])
    return (
        <TodoList
            loading={model.loading}
            todos={[...model.items]} 
            onChange={model.changeTodo}
            onDelete={model.deleteTodo}
        />
    );
}

export default observer(Todos);