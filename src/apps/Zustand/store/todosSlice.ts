import { StateCreator } from 'zustand'
import { shallow } from 'zustand/shallow'
import { t } from 'i18next';

// types
import Ttodo from 'shared/api/models/todo';
import TCreateTodo from "shared/api/models/createTodo";

// utils
import { showToast } from 'shared/components/Toast';
import { prepareQuery } from 'shared/utils/query';

// api
import { apiGetTodos, apiCreateTodo, apiUpdateTodo, apiDeleteTodo } from 'shared/api/apiRequests';

import { useBoundStore } from './index'


export interface ITodosSlice {
  todos: Ttodo[]
  loading: Record<string, boolean>;
  isFetching: boolean
  fetchTodos: () => Promise<void>
  createTodo: (todo: TCreateTodo) => Promise<void>
  updateTodo: (todo: Ttodo) => Promise<void>
  deleteTodo: (id: Ttodo) => Promise<void>
}

export const createTodosSlice: StateCreator<
  ITodosSlice,
  [['zustand/immer', never]],
  [],
  ITodosSlice
> = (set, get) => {
    // useBoundStore.subscribe(
    //     state => state.filters,
    //     () => {
    //         get().fetchTodos()
    //     },
    //     {
    //         equalityFn: shallow,
    //         fireImmediately: true
    //     }
    // )

    return {
        todos: [],
        loading: {},
        isFetching: false,
        fetchTodos: async () => {
            set(state => {
                state.isFetching = true
            })
            const filters = useBoundStore.getState().filters
            try {
                const response = await apiGetTodos(prepareQuery({filters}))
                set(state => {
                    state.todos = response.data || []
                })
            } catch (error) {
                showToast({
                    description: t('toast.somethingWentWrong'),
                    status: 'error'
                })
            } finally {
                set(state => {
                    state.isFetching = false
                })
            }
        },
        createTodo: async todo => {
            set(state => {
                state.loading.createTodo = true
            })
            try {
                const response = await apiCreateTodo(todo)
                set(state => {
                    state.todos.push(response.data)
                })
                showToast({
                    description: t('toast.todoCreated'),
                    status: 'success'
                })
            } catch (error) {
                showToast({
                    description: t('toast.somethingWentWrong'),
                    status: 'error'
                })
            } finally {
                set(state => {
                    state.loading.createTodo = false
                })
            }
        },
        updateTodo: async todo => {
            set(state => {
                state.loading[todo.id] = true
            })
            try {
                const response = await apiUpdateTodo(todo)
                set(state => {
                    const index = state.todos.findIndex(_t => _t.id === todo.id)
                    if (index !== -1) {
                        state.todos[index] = response.data
                    }
                })
                showToast({
                    description: t('toast.todoUpdated'),
                    status: 'info'
                })
            } catch (error) {
                showToast({
                    description: t('toast.somethingWentWrong'),
                    status: 'error'
                })
            } finally {
                set(state => {
                    state.loading[todo.id] = false
                })
            }
        },
        deleteTodo: async todo => {
            set(state => {
                state.loading[todo.id] = true
            })
            try {
                await apiDeleteTodo(todo)
                set(state => ({
                    todos: state.todos.filter(_t => _t.id !== todo.id),
                }))
                showToast({
                    description: t('toast.todoDeleted'),
                    status: 'info'
                })
            } catch (error) {
                showToast({
                    description: t('toast.somethingWentWrong'),
                    status: 'error'
                })
            } finally {
                set(state => {
                    state.loading[todo.id] = false
                })
            }
        }
    }
}