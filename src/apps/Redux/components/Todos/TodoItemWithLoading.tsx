import React, { FC } from 'react';

// redux
import { useAppSelector } from 'apps/Redux/store';

// components
import TodoItem from 'shared/components/TodoItem';
import type { TodoItemComponentProps } from 'shared/components/TodoList';

const TodoItemWithLoading: FC<TodoItemComponentProps> = props => {
    const isLoading = useAppSelector(s => !!s.todos.loading[props.todo.id]);
    return <TodoItem {...props} isLoading={isLoading} />;
};

export default TodoItemWithLoading;
