import React from 'react';

// utils
import StoreProvider from 'Apps/Mobx/storeProvider';

// components
import App from 'Apps/Mobx/components/App';

const Mobx = () => {
    return (
        <StoreProvider>
            <App />
        </StoreProvider>
    );
}

export default Mobx;
