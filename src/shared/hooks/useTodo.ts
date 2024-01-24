import { useState, ChangeEvent, useEffect } from 'react';

// UI
import { useToast } from '@chakra-ui/react'

// hooks
import useCustomEvent, { EVENT_NAMES } from 'shared/hooks/useCustomEvent';

// types
import Ttodo from 'shared/types/todo';

type TEditValues = Exclude<keyof Ttodo, 'id' | 'createdAt'>

const MODE = {
    view: 'view',
    edit: 'edit'
} as const;

type TuseTodo = {
    initialData: Ttodo, 
    onSumbitTodo: (data: Ttodo) => void
}

const validateTodo = (todo: Ttodo) => {
    if (!todo.title) {
        return false
    }
    return true
}

const useTodo = ({ initialData, onSumbitTodo}: TuseTodo) => {
    const [todo, setTodo] = useState<Ttodo>({...initialData, updatedAt: new Date().toISOString()});
    const [mode, setMode] = useState<keyof typeof MODE>(MODE.view);
    const toast = useToast()

    const resetTodo = () => {
        setTodo(initialData)
        setMode(MODE.view)
    };

    const { dispatchCustomEvent } = useCustomEvent<string>({
        eventName: EVENT_NAMES.TODO_FOCUS,
        callback: (todoId: string) => {
            if (todoId !== todo.id && mode === MODE.edit) {
                resetTodo();
            }
        }
    })

    const updateTodo = (updatedKey: TEditValues, value: Ttodo[TEditValues]) => {
        setTodo({...todo, [updatedKey]: value})
    };

    const onSumbitHandler = () => {
        const isValid = validateTodo(todo);
        dispatchCustomEvent(todo.id);
        if (!isValid) {
            toast({
                description: "Title can't be empty!",
                status: 'warning',
                duration: 3000,
                isClosable: true
            });
        } else {
            onSumbitTodo(todo)
            setMode(MODE.view)
        }
    };

    const onChangeTitle = (event: ChangeEvent<any>) => updateTodo('title', event.target.value);
    const onChangeStatus = (value: ChangeEvent<HTMLInputElement>) => updateTodo('status', value.target.checked ? 'completed' : 'active');
    
    const onSubmitTitle = () => {
        dispatchCustomEvent(todo.id);
        if (mode === MODE.edit) {
            onSumbitHandler();
        } else {
            setMode(MODE.edit)
        }
    };

    useEffect(() => {
        onSumbitHandler();
    }, [todo.status])


    return ({
        mode,
        todo,
        isInvalid: !validateTodo(todo),
        onChangeTitle,
        onSubmitTitle,
        onChangeStatus,
        resetTodo
    })
}

export default useTodo;


