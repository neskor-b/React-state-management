// index.ts
import { create } from 'zustand'
import { immer } from 'zustand/middleware/immer'

import { createFiltersSlice, IFiltersSlice } from './filtersSlice'
import { createTodosSlice, ITodosSlice } from './todosSlice'

type Store = IFiltersSlice & ITodosSlice

export const useBoundStore = create<Store>()(
    immer((...a) => ({
        ...createFiltersSlice(...a),
        ...createTodosSlice(...a)
    }))
)
