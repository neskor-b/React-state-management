import { useContext } from 'react';
import { StoreContext } from 'apps/Mobx/storeProvider';
import type { RootStore } from 'apps/Mobx/store';

const useStore = (storeName: keyof RootStore) => {
    const store = useContext(StoreContext);
    return store[storeName];
};

export default useStore;
