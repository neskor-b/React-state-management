import { createSlice, createAsyncThunk, type PayloadAction } from '@reduxjs/toolkit'
import { t } from 'i18next';

// api
import { apiCreateTodo, apiGetTodos, apiDeleteTodo, apiUpdateTodo } from 'shared/api/apiRequests';

// utils
import { showToast } from 'shared/components/Toast';

// types
import Ttodo from 'shared/api/models/todo';
import TCreateTodo from "shared/api/models/createTodo";
import TFilters from 'shared/api/models/filters';
import TQuery from 'shared/api/models/query';


export const createTodo = createAsyncThunk(
    'todos/createTodo',
    async (data: TCreateTodo) => {
        const response = await apiCreateTodo(data)
        return response.data
    }
);

export const fetchTodos = createAsyncThunk(
    'todos/fetchTodos',
    async (query?: TQuery) => {
        const response = await apiGetTodos(query)
        return response.data
    }
);

export const deleteTodo = createAsyncThunk(
    'todos/deleteTodo',
    async (data: Ttodo) => {
        const response = await apiDeleteTodo(data)
        return response.data
    }
);

export const updateTodo = createAsyncThunk(
    'todos/updateTodo',
    async (data: Ttodo) => {
        const response = await apiUpdateTodo(data)
        return response.data
    }
);

const findIndex = (data: Ttodo[], id: string) => data.findIndex(todo => todo.id === id);
const sortTodos = (data: Ttodo[]) => data.sort((a, b) => a.status === b.status ? 0 : a.status === 'active' ? -1 : 1)

export interface CounterState {
    items: Ttodo[],
    loading: Record<string, boolean>,
    isFetching: boolean,
    filters: TFilters,
  }
  
const initialState: CounterState = {
    items: [],
    loading: {},
    isFetching: false,
    filters: {
        status: '',
        search: '',
        orderby: 'createdAt',
        order: 'desc'
    }
}

export const todosSlice = createSlice({
    name: 'todos',
    initialState,
    reducers: {
        updateFilters: (state, action: PayloadAction<TFilters>) => {
            state.filters = action.payload
        }
    },
    extraReducers: builder => {
        builder
            // create todo
            .addCase(createTodo.pending, state => {
                state.loading['createTodo'] = true;
            })
            .addCase(createTodo.fulfilled, (state, action) => {
                state.items.unshift(action.payload);
                state.loading['createTodo'] = false;
                showToast({
                    description: t('toast.todoCreated'),
                    status: 'success'
                })
            })
            .addCase(createTodo.rejected, state => {
                state.loading['createTodo'] = false;
            })

            // fetch todos
            .addCase(fetchTodos.pending, state => {
                state.isFetching = true;
            })
            .addCase(fetchTodos.fulfilled, (state, action) => {
                state.items = action.payload || [];
                state.isFetching = false;
            })
            .addCase(fetchTodos.rejected, state => {
                state.isFetching = false;
            })

            // delete todo
            .addCase(deleteTodo.pending, (state, action) => {
                state.loading[action.meta.arg.id] = true;
            })
            .addCase(deleteTodo.fulfilled, (state, action) => {
                state.items = state.items.filter(todo => todo.id !== action.payload.id);
                state.loading[action.payload.id] = false;
                showToast({
                    description: t('toast.todoDeleted'),
                    status: 'info'
                })
            })
            .addCase(deleteTodo.rejected, state => {
                state.loading['deleteTodo'] = false;
            })

            // update todo
            .addCase(updateTodo.pending, (state, action) => {
                state.loading[action.meta.arg.id] = true;
            })
            .addCase(updateTodo.fulfilled, (state, action) => {
                state.items[findIndex(state.items, action.payload.id)] = action.payload;
                state.loading[action.payload.id] = false;
                showToast({
                    description: t('toast.todoUpdated'),
                    status: 'info'
                })
            })
            .addCase(updateTodo.rejected, state => {
                state.loading['updateTodo'] = false;
            })

            .addMatcher(
                action => action.type.endsWith('/fulfilled') && 
                (action.type.includes('updateTodo') || action.type.includes('fetchTodos')),
                state => {
                    state.items = sortTodos(state.items);
                }
            )

            .addDefaultCase(() => {})
    }
})
  
export const { updateFilters } = todosSlice.actions
  
export default todosSlice.reducer;
