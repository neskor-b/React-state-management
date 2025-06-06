import React, { FC, useEffect } from 'react';
import TodoList from 'shared/components/TodoList';

// atoms
import { todosAtom, loadingAtom, isFetchingAtom, updateTodoAtom, deleteTodoAtom } from 'apps/Jotai/atoms/todo';
import { useAtom, useSetAtom } from 'jotai';

const Todos: FC = () => {
    const fetchTodos = useSetAtom(todosAtom);
    const [todos] = useAtom(todosAtom);
    const [loading] = useAtom(loadingAtom);
    const [isFetching] = useAtom(isFetchingAtom);
    const [, updateTodo] = useAtom(updateTodoAtom);
    const [, deleteTodo] = useAtom(deleteTodoAtom);

    useEffect(() => {
        fetchTodos();
    }, []);

    return (
        <TodoList
            loading={loading}
            isFecthing={isFetching}
            todos={todos} 
            onChange={updateTodo}
            onDelete={deleteTodo}
        />
    );
}

export default Todos;