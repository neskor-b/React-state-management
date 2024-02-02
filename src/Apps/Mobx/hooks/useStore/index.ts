import { useContext } from 'react';
import { StoreContext } from 'Apps/Mobx/storeProvider';
import type { RootStore } from 'Apps/Mobx/store';

const useStore = <K extends keyof RootStore>(storeName: K): RootStore[K] => {
    const store = useContext(StoreContext);
    return store[storeName];
};

export default useStore;
