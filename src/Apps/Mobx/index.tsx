import React from 'react';

// utils
import StoreProvider from 'apps/Mobx/storeProvider';

// components
import App from 'apps/Mobx/components/App';

const Mobx = () => {
    return (
        <StoreProvider>
            <App />
        </StoreProvider>
    );
}

export default Mobx;
