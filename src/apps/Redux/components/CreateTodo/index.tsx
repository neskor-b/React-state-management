import React, { FC } from 'react';

// components
import TodoForm from 'shared/components/TodoForm';

// redux
import { createTodo } from 'apps/Redux/store/slices/todosSlice';
import { useAppSelector, useAppDispatch } from 'apps/Redux/store';

// types
import TCreateTodo from 'shared/api/models/createTodo';
 

const CreateTodo: FC = () => {
    const dispatch = useAppDispatch();
    const { loading, onSubmit } = {
        ...useAppSelector(state => state.todos),
        onSubmit: (data: TCreateTodo) => dispatch(createTodo(data))
    }

    return (
        <TodoForm 
            isLoading={loading.createTodo} 
            onSubmit={onSubmit} 
        />
    );
}

export default CreateTodo;
