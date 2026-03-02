import React, { FC } from 'react';
import { useTranslation } from 'react-i18next';

// UI
import { Flex, Center } from '@chakra-ui/react'

// components
import Spinner from 'shared/components/Spinner';

// types
import Ttodo from 'shared/api/models/todo';

export type TodoItemComponentProps = {
    todo: Ttodo;
    onChange: (data: Ttodo) => void;
    onDelete: (data: Ttodo) => void;
};

type TodoListProps = {
    todos: Ttodo[];
    isFetching: boolean;
    onChange: (data: Ttodo) => void;
    onDelete: (data: Ttodo) => void;
    TodoItemComponent: React.ComponentType<TodoItemComponentProps>;
};

const TodoListInner: FC<TodoListProps> = ({
    todos,
    isFetching,
    onChange,
    onDelete,
    TodoItemComponent
}) => {
    const { t } = useTranslation();

    return (
        <Spinner isLoading={isFetching} size="xl">
            <Flex 
                direction="column" 
                gap={3}
                width="100%"
            >
                {todos.map(todo => (
                    <TodoItemComponent
                        key={todo.id}
                        todo={todo}
                        onChange={onChange}
                        onDelete={onDelete}
                    />
                ))}
            </Flex>
            {todos.length === 0 && !isFetching && (
                <Center 
                    width="100%" 
                    height="81px" 
                >
                    {t('todoList.notFound')}
                </Center>
            )}
        </Spinner>

    );
};

const TodoList = React.memo(TodoListInner);
TodoList.displayName = 'TodoList';

export default TodoList;
