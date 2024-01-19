import React from 'react';

// components
import TodoForm from 'sharedComponents/TodoForm';
import Layout from 'sharedComponents/Layout';
import TodoItem from 'sharedComponents/TodoItem';

const App = () => {
    return (
        <Layout>
            <Layout.Header>
                <TodoForm onSubmit={(values => console.log(values))}/>
            </Layout.Header>
            <Layout.Body>
                <TodoItem 
                    isLoading={false}
                    onChange={() => {}} 
                    todo={{ id: '1', title: 'test', status: 'active', createdAt: new Date().toISOString() }}/>
            </Layout.Body>
        </Layout>
    );
}

export default App;