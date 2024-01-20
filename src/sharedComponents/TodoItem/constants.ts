// types
import Ttodo from 'types/todo';

export const MODE = {
    view: 'view',
    edit: 'edit'
} as const;

export const INPUT_MODE = {
    [MODE.edit]: 'outline',
    [MODE.view]: 'unstyled'
} as const;

export const CHECKED: Record<Ttodo['status'], boolean> = {
    active: false,
    completed: true
}
