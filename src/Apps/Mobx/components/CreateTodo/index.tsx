import React, { FC } from 'react';
import { observer } from "mobx-react-lite"
import useStore from 'apps/Mobx/hooks/useStore';

import TodoForm from 'shared/components/TodoForm';


const CreateTodo: FC = () => {
    const model = useStore('todos');
    return (
        <TodoForm 
            isLoading={model.loading.todoForm} 
            onSubmit={model.createTodo} 
        />
    );
}

export default observer(CreateTodo);
