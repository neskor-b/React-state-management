import React, { FC } from 'react';
import { useTranslation } from 'react-i18next';

// UI
import { Flex, Center } from '@chakra-ui/react'

// components
import TodoItem from 'shared/components/TodoItem';
import Spinner from 'shared/components/Spinner';

// types
import Ttodo from 'shared/api/models/todo';

type TodoListProps = {
    todos: Ttodo[];
    loading: Record<string, boolean>
    isFetching: boolean
    onChange: (data: Ttodo) => void;
    onDelete: (data: Ttodo) => void;
}

const TodoListInner: FC<TodoListProps> = ({ todos, loading, isFetching, onChange, onDelete }) => {
    const { t } = useTranslation();
    return (
        <Spinner isLoading={isFetching} size="xl">
            <Flex 
                direction="column" 
                gap={3}
                width="100%"
            >
                {todos.map(todo => 
                    <TodoItem
                        isLoading={loading[todo.id]}
                        key={todo.id}
                        todo={todo} 
                        onChange={onChange}
                        onDelete={onDelete}
                    />
                )}
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
