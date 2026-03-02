import { configureStore } from '@reduxjs/toolkit'
import { useDispatch, useSelector, type TypedUseSelectorHook } from 'react-redux'

// reducers
import todos from './slices/todosSlice'

// listeners
import { todosListenerMiddleware } from './listeners/todosListeners'

export const store = configureStore({
    reducer: {
        todos
    },
    middleware: getDefaultMiddleware =>
        getDefaultMiddleware().prepend(todosListenerMiddleware.middleware)
})

type RootState = ReturnType<typeof store.getState>
type AppDispatch = typeof store.dispatch

export const useAppDispatch: () => AppDispatch = useDispatch
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector
