import React, { FC, useState, ChangeEvent } from 'react';

// UI
import { Card, CardBody, Checkbox, Flex, Input, IconButton } from '@chakra-ui/react'
import { EditIcon, CheckIcon } from '@chakra-ui/icons'

// // components
// import Form from "sharedComponents/Form";


// types
import Ttodo from 'types/todo';

type TodoItemProps = {
    todo: Ttodo,
    isLoading: boolean,
    onChange: (data: Ttodo) => void,
}

type TEditValues = Exclude<keyof Ttodo, 'id' | 'createdAt'>

const MODE = {
    view: 'view',
    edit: 'edit'
} as const;

const INPUT_MODE = {
    [MODE.edit]: 'outline',
    [MODE.view]: 'unstyled'
} as const;

const CHECKED: Record<Ttodo['status'], boolean> = {
    active: false,
    completed: true
}

const ICONS = {
    [MODE.edit]: <CheckIcon />,
    [MODE.view]: <EditIcon />
}

const TodoItem: FC<TodoItemProps> = ({ todo, isLoading, onChange }) => {
    // const formRef = useRef<any>(null);
    const [mode, setMode] = useState<keyof typeof MODE>(MODE.view);
    const [title, setTitle] = useState(todo.title);

    const updateTodo = (updatedKey: TEditValues, value: Ttodo[TEditValues]) => {
        setMode(MODE.view);
        return {...todo, [updatedKey]: value}
    };
    const changeTitle = (value: ChangeEvent<HTMLInputElement>) => setTitle(value.target.value);

    const onChangeChecked = (value: ChangeEvent<HTMLInputElement>) => onChange(updateTodo('status', value.target.checked ? 'completed' : 'active'))
    const onChangeTitle = () => onChange(updateTodo('title', title));


    const ICON_ACTION = {
        [MODE.edit]: () => {
            onChangeTitle();
        },
        [MODE.view]: () => setMode(MODE.edit)
    }
    return (
        <Card>
            <CardBody>
                <Flex 
                    gap={2} 
                    align="center"
                >
                    <Checkbox 
                        isChecked={CHECKED[todo.status]}
                        disabled={isLoading}
                        size="lg"
                        onChange={onChangeChecked}
                    />
                    <Input 
                        variant={INPUT_MODE[mode]} 
                        value={title}
                        disabled={mode === MODE.view}
                        _disabled={{
                            color: 'Black',
                            height: '40px',
                            paddingLeft: '16px'
                        }}
                        onChange={changeTitle}
                    />
                    <IconButton 
                        aria-label='edit todo' 
                        icon={ICONS[mode]} 
                        size="sm"
                        onClick={ICON_ACTION[mode]}
                    />
                </Flex>
                {/* <Form 
                    formRef={formRef} 
                    onSubmit={onSubmitHandler} 
                    formConfig={{ defaultValues: todo }}
                >
                    {({ control }) => (
                        <Box 
                            display="flex" 
                            alignItems="center" 
                            gap={2}
                        >
                            <InputGroup size='md'>
                                <FormFieldInput
                                    name="todo"
                                    control={control}
                                    placeholder="Add Todo..."
                                    rules={{ required: "This field is required" }} 
                                />
                                <InputRightElement width='4.5rem'>
                                    <Button
                                        h='1.75rem'
                                        size='sm'
                                        type="submit"
                                    >
                                        Add
                                    </Button>
                                </InputRightElement>
                            </InputGroup>
                        </Box>
                    )}
                </Form> */}
            </CardBody>
        </Card>
    );
};

export default TodoItem;