import React, { FC } from 'react';
import { observer } from "mobx-react-lite"

// hooks
import useStore from 'Apps/Mobx/hooks/useStore';

// components
import TodoList from 'shared/components/TodoList';


const TodoListObserved = observer(TodoList)


const Todos: FC = () => {
    const { state, actions } = useStore('todos');
    return (
        <TodoListObserved
            loading={state.loading}
            isFecthing={state.isFetching}
            todos={state.items} 
            onChange={actions.updateTodo}
            onDelete={actions.deleteTodo}
        />
    );
}

export default observer(Todos);