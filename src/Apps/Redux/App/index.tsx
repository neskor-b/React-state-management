import React, { useEffect, useState } from 'react';

// components
import TodoForm from 'shared/components/TodoForm';
import Layout from 'shared/components/Layout';
import TodoList from 'shared/components/TodoList';

// utils
import { push, update, remove } from 'shared/utils/array';

// types
import Ttodo from 'shared/types/todo';

const MOCK_TODOS: Ttodo[] = [
    { id: '1', title: 'test', status: 'active', createdAt: new Date().toISOString() }
];


const App = () => {
    const [todos, setTodos] = useState<Ttodo[]>(MOCK_TODOS);

    const addTodo = (data: Ttodo) => setTodos(push(todos, data, 'front'));
    const changeTodo = (data: Ttodo) => setTodos(update(todos, ({ id }) => id === data.id, data));
    const deleteTodo = (data: Ttodo) => setTodos(remove(todos, ({ id }) => id === data.id));

    useEffect(() => {
        console.log(todos)
    }, [todos])

    return (
        <Layout>
            <Layout.App>
                <TodoForm onSubmit={addTodo}/>
                <TodoList
                    loading={{}}
                    todos={todos} 
                    onChange={changeTodo}
                    onDelete={deleteTodo}
                />
            </Layout.App>
            <Layout.Widget>
                widget
            </Layout.Widget>
        </Layout>
    );
}

export default App;