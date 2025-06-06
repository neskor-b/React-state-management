import React from 'react';

// components
import CreateTodo from 'apps/Jotai/components/CreateTodo';
import Todos from 'apps/Jotai/components/Todos';
import Layout from 'shared/components/Layout';
import Filter from 'apps/Jotai/components/Filter';
import Widget from 'apps/Jotai/components/Widget';

const App = () => {
    return (
        <Layout>
            <Layout.App>
                <CreateTodo />
                <Filter />
                <Todos />
            </Layout.App>
            <Layout.Widget>
                <Widget />
            </Layout.Widget>
        </Layout>
    );
}

export default App;