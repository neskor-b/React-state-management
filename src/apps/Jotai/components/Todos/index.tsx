import React, { FC, useEffect } from 'react';

// components
import TodoListJotai from 'apps/Jotai/components/TodoListJotai';

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
        <TodoListJotai
            todos={todos}
            isFetching={isFetching}
            onChange={updateTodo}
            onDelete={deleteTodo}
        />
    );
}

export default Todos;