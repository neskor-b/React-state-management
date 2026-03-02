import React, { FC } from 'react';
import { useAtomValue } from 'jotai';

// components
import TodoItem from 'shared/components/TodoItem';

// atoms
import { isLoadingAtom } from 'apps/Jotai/atoms/todo';

// types
import Ttodo from 'shared/api/models/todo';

type TodoItemWithLoadingProps = {
    todo: Ttodo;
    onChange: (data: Ttodo) => void;
    onDelete: (data: Ttodo) => void;
};

const TodoItemWithLoading: FC<TodoItemWithLoadingProps> = ({ todo, onChange, onDelete }) => {
    const isLoading = useAtomValue(isLoadingAtom(todo.id));

    return (
        <TodoItem
            todo={todo}
            isLoading={isLoading}
            onChange={onChange}
            onDelete={onDelete}
        />
    );
};

export default TodoItemWithLoading;
