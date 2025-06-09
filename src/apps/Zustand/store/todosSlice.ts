import { StateCreator } from 'zustand'
import { t } from 'i18next';

// types
import Ttodo from 'shared/api/models/todo';
import TCreateTodo from "shared/api/models/createTodo";
import TFilters from "shared/api/models/filters"

// utils
import { showToast } from 'shared/components/Toast';
import { prepareQuery } from 'shared/utils/query';
import { sortTodos } from 'shared/helpers';

// api
import { apiGetTodos, apiCreateTodo, apiUpdateTodo, apiDeleteTodo } from 'shared/api/apiRequests';

import { Store } from './index'


export interface ITodosSlice {
  todos: Ttodo[]
  loading: Record<string, boolean>;
  isFetching: boolean
  fetchTodos: (filters: TFilters) => Promise<void>
  createTodo: (todo: TCreateTodo) => Promise<void>
  updateTodo: (todo: Ttodo) => Promise<void>
  deleteTodo: (id: Ttodo) => Promise<void>
}

export const createTodosSlice: StateCreator<
  Store,
  [['zustand/immer', never], ['zustand/subscribeWithSelector', never]],
  [],
  ITodosSlice
> = set => {

    return {
        todos: [],
        loading: {},
        isFetching: false,
        fetchTodos: async (filters: TFilters) => {
            set(({ todosState }) => {
                todosState.isFetching = true
            })
            try {
                const response = await apiGetTodos(prepareQuery({filters}))
                set(({ todosState }) => {
                    todosState.todos = sortTodos(response.data)
                })
            } catch (error) {
                showToast({
                    description: t('toast.somethingWentWrong'),
                    status: 'error'
                })
            } finally {
                set(({ todosState }) => {
                    todosState.isFetching = false
                })
            }
        },
        createTodo: async todo => {
            set(({ todosState }) => {
                todosState.loading.createTodo = true
            })
            try {
                const response = await apiCreateTodo(todo)
                set(({ todosState }) => {
                    todosState.todos = sortTodos([response.data, ...todosState.todos])
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
                set(({ todosState }) => {
                    todosState.loading.createTodo = false
                })
            }
        },
        updateTodo: async todo => {
            set(({ todosState }) => {
                todosState.loading[todo.id] = true
            })
            try {
                const response = await apiUpdateTodo(todo)
                set(({ todosState }) => {
                    const index = todosState.todos.findIndex(_t => _t.id === todo.id)
                    if (index !== -1) {
                        todosState.todos[index] = response.data
                    }
                    todosState.todos = sortTodos(todosState.todos)
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
                set(({ todosState }) => {
                    todosState.loading[todo.id] = false
                })
            }
        },
        deleteTodo: async todo => {
            set(({ todosState }) => {
                todosState.loading[todo.id] = true
            })
            try {
                await apiDeleteTodo(todo)
                set(({ todosState }) => {
                    todosState.todos = sortTodos(todosState.todos.filter(_t => _t.id !== todo.id))
                })
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
                set(({ todosState }) => {
                    todosState.loading[todo.id] = false
                })
            }
        }
    }
}