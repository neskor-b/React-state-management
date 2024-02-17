import React, { useEffect } from 'react';
import { observer } from "mobx-react-lite"

// hooks
import useStore from 'apps/Mobx/hooks/useStore';

// components
import Layout from 'shared/components/Layout';
import CreateTodo from 'apps/Mobx/components/CreateTodo';
import Todos from 'apps/Mobx/components/Todos';
import Filter from 'apps/Mobx/components/Filter';



const App = () => {
    const model = useStore('todos');
    useEffect(() => () => model.resetStore(), [])
    return (
        <Layout>
            <Layout.App>
                <CreateTodo />
                <Filter/>
                <Todos />
            </Layout.App>
            <Layout.Widget>
                widget
            </Layout.Widget>
        </Layout>
    );
}

export default observer(App);