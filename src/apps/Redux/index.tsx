import React from 'react';
import { Provider } from 'react-redux'

// store
import { store } from 'apps/Redux/store';

// components
import App from 'apps/Redux/components/App/index';

const Redux = () => {
    return (
        <Provider store={store}>
            <App />
        </Provider>
    );
}

export default Redux;