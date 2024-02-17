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
    const model = {
        ...useAppSelector(state => state.todos),
        createTodo: (data: TCreateTodo) => dispatch(createTodo(data))
    }

    return (
        <TodoForm 
            isLoading={model.loading.createTodo} 
            onSubmit={model.createTodo} 
        />
    );
}

export default CreateTodo;
