import { atom } from 'jotai';
import { todosAtom } from './todo';
import TFilters from 'shared/api/models/filters';


export const filtersAtom = atom<TFilters>({
    status: '',
    search: '',
    orderby: 'createdAt',
    order: 'desc'
});

export const filtersWithEffectAtom = atom(
    get => get(filtersAtom),
    (get, set, next: TFilters) => {
        set(filtersAtom, next);
        set(todosAtom); 
    }
);
