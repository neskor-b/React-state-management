// index.ts
import { create } from 'zustand'
import { subscribeWithSelector } from 'zustand/middleware';
import { immer } from 'zustand/middleware/immer'

import { createFiltersSlice, IFiltersSlice } from './filtersSlice'
import { createTodosSlice, ITodosSlice } from './todosSlice'

export type Store = {
    filterState: IFiltersSlice,
    todosState: ITodosSlice,
}

export const useStore = create<Store>()(
    subscribeWithSelector(
        immer((...a) => ({
            filterState: createFiltersSlice(...a),
            todosState: createTodosSlice(...a)
        }))
    )
);
