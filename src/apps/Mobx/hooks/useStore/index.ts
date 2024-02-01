import { useContext } from 'react';
import { StoreContext } from 'apps/Mobx/storeProvider';
import type { RootStore } from 'apps/Mobx/store';

const useStore = <K extends keyof RootStore>(storeName: K): RootStore[K] => {
    const store = useContext(StoreContext);
    return store[storeName];
};

export default useStore;
