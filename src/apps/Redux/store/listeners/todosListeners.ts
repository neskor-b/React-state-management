import { createListenerMiddleware, isAnyOf } from '@reduxjs/toolkit';
import { t } from 'i18next';

// api
import { createTodo, deleteTodo, updateTodo } from '../slices/todosSlice';

// utils
import { showToast } from 'shared/components/Toast';

export const todosListenerMiddleware = createListenerMiddleware();

todosListenerMiddleware.startListening({
    matcher: isAnyOf(
        createTodo.fulfilled,
        deleteTodo.fulfilled,
        updateTodo.fulfilled
    ),
    effect: action => {
        if (createTodo.fulfilled.match(action)) {
            showToast({
                description: t('toast.todoCreated'),
                status: 'success'
            });
        } else if (deleteTodo.fulfilled.match(action)) {
            showToast({
                description: t('toast.todoDeleted'),
                status: 'info'
            });
        } else if (updateTodo.fulfilled.match(action)) {
            showToast({
                description: t('toast.todoUpdated'),
                status: 'info'
            });
        }
    }
});
