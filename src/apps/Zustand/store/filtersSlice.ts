import { StateCreator } from 'zustand'
import { Store } from '.'

import TFilters from 'shared/api/models/filters';

export interface IFiltersSlice {
  filters: TFilters
  setFilters: (filters: Partial<TFilters>) => void
}

export const createFiltersSlice: StateCreator<
Store,
  [['zustand/immer', never]],
  [],
  IFiltersSlice
> = set => ({
    filters: {
        status: '',
        search: '',
        orderby: 'createdAt',
        order: 'desc'
    },
    setFilters: filters => {
        set(({ filterState }) => {
            Object.assign(filterState.filters, filters)
        })
    }
})