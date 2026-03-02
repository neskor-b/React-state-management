import React, { FC } from 'react';

// components
import TodoForm from 'shared/components/TodoForm';

import { useStore } from 'apps/Zustand/store';
 

const CreateTodo: FC = () => {
    const isLoading = useStore(state => state.todosState.loading.createTodo ?? false);
    const createTodo = useStore(state => state.todosState.createTodo);

    return (
        <TodoForm 
            isLoading={isLoading} 
            onSubmit={createTodo} 
        />
    );
}

export default CreateTodo;
