import { StateCreator } from 'zustand'

import TFilters from 'shared/api/models/filters';

export interface IFiltersSlice {
  filters: TFilters
  setFilters: (filters: Partial<TFilters>) => void
}

export const createFiltersSlice: StateCreator<
  IFiltersSlice,
  [['zustand/immer', never]],
  [],
  IFiltersSlice
> = set => ({
    filters: {
        status: 'active',
        search: '',
        orderby: 'createdAt',
        order: 'desc'
    },
    setFilters: filters => {
        set(state => {
            Object.assign(state.filters, filters)
        })
    }
})