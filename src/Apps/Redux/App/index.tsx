import React, { useState } from 'react';

// components
import TodoForm from 'shared/components/TodoForm';
import Layout from 'shared/components/Layout';
import TodoList from 'shared/components/TodoList';

// utils
import arrayToObject from 'shared/utils/arrayToObject';

// types
import Ttodo from 'shared/types/todo';

const MOCK_TODOS: Ttodo[] = [
    { id: '1', title: 'test', status: 'active', createdAt: new Date().toISOString() }
];


const App = () => {
    const [todos, setTodos] = useState(arrayToObject<Ttodo>(MOCK_TODOS, 'id'));

    const onChangeTodo = (data: Ttodo) => {        
        setTodos({
            ...todos,
            [data.id]: data
        })
    }
    const addTodo = (data: Ttodo) => {
        setTodos({
            ...todos,
            [data.id]: data
        })
    }

    return (
        <Layout>
            <Layout.Header>
                <TodoForm onSubmit={addTodo}/>
            </Layout.Header>
            <Layout.Body>
                <TodoList
                    loading={{}}
                    todos={todos} 
                    onChange={onChangeTodo}
                />
            </Layout.Body>
        </Layout>
    );
}

export default App;