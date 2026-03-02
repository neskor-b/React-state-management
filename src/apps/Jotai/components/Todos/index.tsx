import React, { FC, useEffect } from 'react';

// components
import TodoList from 'shared/components/TodoList';

// atoms
import { todosAtom, isFetchingAtom, loadingAtom, updateTodoAtom, deleteTodoAtom } from 'apps/Jotai/atoms/todo';
import { useAtom, useAtomValue, useSetAtom } from 'jotai';

const Todos: FC = () => {
    const fetchTodos = useSetAtom(todosAtom);
    const [todos] = useAtom(todosAtom);
    const [isFetching] = useAtom(isFetchingAtom);
    const loading = useAtomValue(loadingAtom);
    const updateTodo = useSetAtom(updateTodoAtom);
    const deleteTodo = useSetAtom(deleteTodoAtom);

    useEffect(() => {
        fetchTodos();
    }, [fetchTodos]);

    return (
        <TodoList
            loading={loading}
            todos={todos}
            isFetching={isFetching}
            onChange={updateTodo}
            onDelete={deleteTodo}
        />
    );
}

export default Todos;