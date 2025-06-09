import React, { FC } from 'react';

// components
import TodoForm from 'shared/components/TodoForm';

import { useStore } from 'apps/Zustand/store';
 

const CreateTodo: FC = () => {
    const { loading, createTodo } = useStore(state => state.todosState);
    return (
        <TodoForm 
            isLoading={loading.createTodo} 
            onSubmit={createTodo} 
        />
    );
}

export default CreateTodo;
