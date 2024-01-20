import React, { useState } from 'react';

// components
import TodoForm from 'sharedComponents/TodoForm';
import Layout from 'sharedComponents/Layout';
import TodoItem from 'sharedComponents/TodoItem';

// types
import Ttodo from 'types/todo';

const MOCK_TODOS: Ttodo[] =[
    { id: '1', title: 'test', status: 'active', createdAt: new Date().toISOString() },
    { id: '2', title: 'test2', status: 'completed', createdAt: new Date().toISOString() },
    { id: '3', title: 'test3', status: 'active', createdAt: new Date().toISOString() }
];

const arrayToObject = (arr: Ttodo[]) => {
    return arr.reduce((obj: any, item: Ttodo) => {
        obj[item.id] = item;
        return obj
    }, {})
}


const App = () => {
    const [todos, setTodos] = useState<Ttodo[]>(arrayToObject(MOCK_TODOS));
    const onChangeTodo = (data: Ttodo) => {
        setTodos({
            ...todos,
            [data.id]: data
        })
    }
    return (
        <Layout>
            <Layout.Header>
                <TodoForm onSubmit={(values => console.log(values))}/>
            </Layout.Header>
            <Layout.Body>
                {Object.keys(todos).map((todoId: any) => 
                    <TodoItem
                        key={todoId}
                        isLoading={false}
                        onChange={onChangeTodo}
                        todo={todos[todoId]} 
                    />
                )}
            </Layout.Body>
        </Layout>
    );
}

export default App;