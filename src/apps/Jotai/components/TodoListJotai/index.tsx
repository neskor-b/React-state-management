import React, { FC } from 'react';
import { useTranslation } from 'react-i18next';

// UI
import { Flex, Center } from '@chakra-ui/react';

// components
import Spinner from 'shared/components/Spinner';
import TodoItemWithLoading from 'apps/Jotai/components/TodoItemWithLoading';

// types
import Ttodo from 'shared/api/models/todo';

type TodoListJotaiProps = {
    todos: Ttodo[];
    isFetching: boolean;
    onChange: (data: Ttodo) => void;
    onDelete: (data: Ttodo) => void;
};

const TodoListJotai: FC<TodoListJotaiProps> = ({ todos, isFetching, onChange, onDelete }) => {
    const { t } = useTranslation();

    return (
        <Spinner isLoading={isFetching} size="xl">
            <Flex
                direction="column"
                gap={3}
                width="100%"
            >
                {todos.map(todo => (
                    <TodoItemWithLoading
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

export default TodoListJotai;
