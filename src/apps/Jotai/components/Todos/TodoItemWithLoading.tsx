import React, { FC } from 'react';
import { useAtomValue } from 'jotai';

// atoms
import { isLoadingAtom } from 'apps/Jotai/atoms/todo';

// components
import TodoItem from 'shared/components/TodoItem';
import type { TodoItemComponentProps } from 'shared/components/TodoList';

const TodoItemWithLoading: FC<TodoItemComponentProps> = props => {
    const isLoading = useAtomValue(isLoadingAtom(props.todo.id));
    return <TodoItem {...props} isLoading={isLoading} />;
};

export default TodoItemWithLoading;
