import React, { FC } from 'react';
import { observer } from 'mobx-react-lite';

// hooks
import useStore from 'apps/Mobx/hooks/useStore';

// components
import TodoItem from 'shared/components/TodoItem';
import type { TodoItemComponentProps } from 'shared/components/TodoList';

const TodoItemWithLoading: FC<TodoItemComponentProps> = observer(props => {
    const { loading } = useStore('todos');
    const isLoading = !!loading[props.todo.id];
    return <TodoItem {...props} isLoading={isLoading} />;
});

export default TodoItemWithLoading;
