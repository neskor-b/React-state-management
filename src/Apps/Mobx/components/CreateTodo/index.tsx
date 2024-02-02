import React, { FC } from 'react';
import { observer } from "mobx-react-lite"
import useStore from 'Apps/Mobx/hooks/useStore';

import TodoForm from 'shared/components/TodoForm';


const CreateTodo: FC = () => {
    const { state, actions } = useStore('todos');
    return (
        <TodoForm 
            isLoading={state.loading.todoForm} 
            onSubmit={actions.createTodo} 
        />
    );
}

export default observer(CreateTodo);
