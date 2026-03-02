import React, { FC } from 'react';

// store
import { useStore } from 'apps/Zustand/store';

// components
import TodoItem from 'shared/components/TodoItem';
import type { TodoItemComponentProps } from 'shared/components/TodoList';

const TodoItemWithLoading: FC<TodoItemComponentProps> = props => {
    const isLoading = useStore(s => !!s.todosState.loading[props.todo.id]);
    return <TodoItem {...props} isLoading={isLoading} />;
};

export default TodoItemWithLoading;
