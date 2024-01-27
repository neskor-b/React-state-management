import React, { FC } from 'react';
import { observer } from "mobx-react-lite"
import useStore from 'apps/Mobx/hooks/useStore';

import TodoForm from 'shared/components/TodoForm';


const CreateTodo: FC = () => {
    const model = useStore('todos');
    return (
        <TodoForm onSubmit={model.addTodo} />
    );
}

export default observer(CreateTodo);
