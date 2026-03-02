import React, { FC } from 'react';
import { useAtom } from 'jotai';

// atoms
import { createTodoAtom, loadingCreateTodoAtom } from 'apps/Jotai/atoms/todo';

// components
import TodoForm from 'shared/components/TodoForm';


 

const CreateTodo: FC = () => {
    const [, createTodo] = useAtom(createTodoAtom);
    const [isLoading] = useAtom(loadingCreateTodoAtom);

    return (
        <TodoForm 
            isLoading={isLoading} 
            onSubmit={createTodo} 
        />
    );
}

export default CreateTodo;
