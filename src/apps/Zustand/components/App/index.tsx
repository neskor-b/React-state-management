import React from 'react';

// components
import CreateTodo from 'apps/Zustand/components/CreateTodo';
import Todos from 'apps/Zustand/components/Todos';
import Layout from 'shared/components/Layout';
import Filter from 'apps/Zustand/components/Filter';
import Widget from 'apps/Zustand/components/Widget';

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