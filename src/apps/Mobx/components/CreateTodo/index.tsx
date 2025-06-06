import React, { FC } from 'react';
import { observer } from "mobx-react-lite"
import useStore from 'apps/Mobx/hooks/useStore';

import TodoForm from 'shared/components/TodoForm';


const CreateTodo: FC = () => {
    const { loading, createTodo } = useStore('todos');
    return (
        <TodoForm 
            isLoading={loading.todoForm} 
            onSubmit={createTodo} 
        />
    );
}

export default observer(CreateTodo);
