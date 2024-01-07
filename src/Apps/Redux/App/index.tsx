import React from 'react';

// components
import TodoForm from 'sharedComponents/TodoForm';
import Layout from 'sharedComponents/Layout';

const App = () => {
    return (
        <Layout>
            <Layout.Header>
                <TodoForm onSubmit={(values => console.log(values))}/>
            </Layout.Header>
            <Layout.Body>
                {' '}
            </Layout.Body>
        </Layout>
    );
}

export default App;