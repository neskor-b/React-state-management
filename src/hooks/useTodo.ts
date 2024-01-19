import { useState, ChangeEvent } from 'react';

// UI
import { useToast } from '@chakra-ui/react'

// types
import Ttodo from 'types/todo';

type TEditValues = Exclude<keyof Ttodo, 'id' | 'createdAt'>

const MODE = {
    view: 'view',
    edit: 'edit'
} as const;

type TuseTodo = {
    initialData: Ttodo, 
    onSumbitTodo: (data: Ttodo) => void
}

const useTodo = ({ initialData, onSumbitTodo}: TuseTodo) => {
    const [todo, setTodo] = useState<Ttodo>({...initialData, updatedAt: new Date().toISOString()});
    const [mode, setMode] = useState<keyof typeof MODE>(MODE.view);
    const toast = useToast()

    const updateTodo = (updatedKey: TEditValues, value: Ttodo[TEditValues]) => {
        setTodo({...todo, [updatedKey]: value})
    };

    const resetTodo = () => {
        setTodo(initialData)
        setMode(MODE.view)
    };

    const onSumbitHandler = (cb?: () => void) => {
        if (!todo.title) {
            toast({
                title: 'Warning',
                description: "Todoʼs title can't be empty!",
                status: 'warning',
                duration: 9000,
                isClosable: true
            });
        } else {
            onSumbitTodo(todo)
            setMode(MODE.view)
            cb && cb();
        }
    };

    const onChangeTitle = (event: ChangeEvent<any>) => updateTodo('title', event.target.value);
    
    const onSubmitTitle = () => {
        if (mode === MODE.edit) {
            onSumbitHandler();
        } else {
            setMode(MODE.edit)
        }
    };

    const onChangeChecked = (value: ChangeEvent<HTMLInputElement>) => {
        onSumbitHandler(() => updateTodo('status', value.target.checked ? 'completed' : 'active'));
    }

    return ({
        mode,
        todo,
        onChangeTitle,
        onSubmitTitle,
        onChangeChecked,
        resetTodo
    })
}

export default useTodo;


