import React, { FC } from 'react';
import { observer } from "mobx-react-lite"

// hooks
import useStore from 'apps/Mobx/hooks/useStore';

// components
import TodoList from 'shared/components/TodoList';


const Todos: FC = () => {
    const model = useStore('todos');
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