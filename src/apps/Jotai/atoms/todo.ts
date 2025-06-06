import { atom } from 'jotai';
import { filtersAtom } from './filters';
import { t } from 'i18next';

// types
import Ttodo from 'shared/api/models/todo';
import TCreateTodo from "shared/api/models/createTodo";

// utils
import { showToast } from 'shared/components/Toast';
import { createArrayAtomCrud } from './helpers';
import { prepareQuery } from 'shared/utils/query';

// api
import { apiGetTodos, apiCreateTodo, apiUpdateTodo, apiDeleteTodo } from 'shared/api/apiRequests';

export type LoadingState = Record<string, boolean>

const defaultLoadingState: LoadingState = {
};

export const todosStateAtom = atom<Ttodo[]>([]);

const todosCrud = createArrayAtomCrud(todosStateAtom);

export const isFetchingAtom = atom<boolean>(false);
export const loadingAtom = atom<LoadingState>(defaultLoadingState);

export const setIsFetchingAtom = atom(
    null,
    (_, set, isFetching: boolean) => {
        set(isFetchingAtom, isFetching);
    }
);

export const setLoadingAtom = atom(
    null,
    (get, set, next: LoadingState) => {
        const current = get(loadingAtom);
        set(loadingAtom, {
            ...current,
            ...next
        });
    }
);

export const isLoadingAtom = (id: string) =>
    atom(get => !!get(loadingAtom)[id]);


export const todosAtom = atom(
    get => get(todosStateAtom),
    async (get, set) => {
        const filters = get(filtersAtom);

        set(setIsFetchingAtom, true);
        set(setLoadingAtom, { });

        try {
            const preparedQuery = prepareQuery({ filters });
            const response = await apiGetTodos(preparedQuery);
            set(todosCrud.set, response.data || []);
        } catch (e) {
            console.error('Fetch error', e);
        } finally {
            set(setIsFetchingAtom, false);
            set(setLoadingAtom, { });
        }
    }
);

export const createTodoAtom = atom(null, async (get, set, todo: TCreateTodo) => {
    set(setLoadingAtom, { createTodo: true });
    try {
        const response = await apiCreateTodo(todo);
        set(todosCrud.add, response.data);
        showToast({
            description: t('toast.todoCreated'),
            status: 'success'
        })
    } finally {
        set(setLoadingAtom, { createTodo: false });
    }
});

export const updateTodoAtom = atom(null, async (get, set, todo: Ttodo) => {
    set(setLoadingAtom, { [todo.id]: true });
    try {
        await apiUpdateTodo(todo);
        set(todosCrud.update, todo);
        showToast({
            description: t('toast.todoUpdated'),
            status: 'info'
        })
    } finally {
        set(setLoadingAtom, { [todo.id]: false });
    }
});

export const deleteTodoAtom = atom(null, async (get, set, todo: Ttodo) => {
    set(setLoadingAtom, { [todo.id]: true });
    try {
        await apiDeleteTodo(todo);
        set(todosCrud.remove, todo.id);
        showToast({
            description: t('toast.todoDeleted'),
            status: 'info'
        })
    } finally {
        set(setLoadingAtom, { [todo.id]: false });
    }
});
  