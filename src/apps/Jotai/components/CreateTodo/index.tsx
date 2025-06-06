import React, { FC } from 'react';
import { useAtom } from 'jotai';

// atoms
import { createTodoAtom, loadingAtom } from 'apps/Jotai/atoms/todo';

// components
import TodoForm from 'shared/components/TodoForm';


 

const CreateTodo: FC = () => {
    const [, createTodo] = useAtom(createTodoAtom);
    const [loading] = useAtom(loadingAtom);

    return (
        <TodoForm 
            isLoading={loading.createTodo} 
            onSubmit={createTodo} 
        />
    );
}

export default CreateTodo;
