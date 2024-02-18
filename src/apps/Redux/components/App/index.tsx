import React from 'react';

// components
import CreateTodo from 'apps/Redux/components/CreateTodo';
import Todos from 'apps/Redux/components/Todos';
import Layout from 'shared/components/Layout';
import Filter from 'apps/Redux/components/Filter';

const App = () => {
    return (
        <Layout>
            <Layout.App>
                <CreateTodo />
                <Filter />
                <Todos />
            </Layout.App>
            <Layout.Widget>
                widget
            </Layout.Widget>
        </Layout>
    );
}

export default App;