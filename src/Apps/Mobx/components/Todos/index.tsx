import React, { FC } from 'react';
import { observer } from "mobx-react-lite"

// hooks
import useStore from 'apps/Mobx/hooks/useStore';

// components
import TodoList from 'shared/components/TodoList';


const TodoListObserved = observer(TodoList)


const Todos: FC = () => {
    const model = useStore('todos');
    return (
        <TodoListObserved
            loading={model.loading}
            isFecthing={model.isFetching}
            todos={model.items} 
            onChange={model.changeTodo}
            onDelete={model.deleteTodo}
        />
    );
}

export default observer(Todos);