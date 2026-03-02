import React, { FC, useEffect } from 'react';

// components
import TodoList from 'shared/components/TodoList';
import TodoItemWithLoading from './TodoItemWithLoading';

// atoms
import { todosAtom, isFetchingAtom, updateTodoAtom, deleteTodoAtom } from 'apps/Jotai/atoms/todo';
import { useAtom, useSetAtom } from 'jotai';

const Todos: FC = () => {
    const fetchTodos = useSetAtom(todosAtom);
    const [todos] = useAtom(todosAtom);
    const [isFetching] = useAtom(isFetchingAtom);
    const updateTodo = useSetAtom(updateTodoAtom);
    const deleteTodo = useSetAtom(deleteTodoAtom);

    useEffect(() => {
        fetchTodos();
    }, [fetchTodos]);

    return (
        <TodoList
            TodoItemComponent={TodoItemWithLoading}
            todos={todos}
            isFetching={isFetching}
            onChange={updateTodo}
            onDelete={deleteTodo}
        />
    );
}

export default Todos;