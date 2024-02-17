import React, { useEffect } from 'react';

// components
import CreateTodo from 'apps/Redux/components/CreateTodo';
import Todos from 'apps/Redux/components/Todos';
import Layout from 'shared/components/Layout';
import Filter from 'apps/Redux/components/Filter';

// redux
import { useAppDispatch } from 'apps/Redux/store';
import { resetStore } from 'apps/Redux/store/slices/todosSlice';

const App = () => {
    const dispatch = useAppDispatch();
    const reset = () => dispatch(resetStore())

    useEffect(() => {
        return () => {
            reset();
        }
    }, [])

    return (
        <div>
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
        </div>
    );
}

export default App;