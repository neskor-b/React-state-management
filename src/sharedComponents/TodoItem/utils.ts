import { MODE } from 'sharedComponents/TodoItem/constants'

export const getCartStyles = ({ isInvalid, mode }: { isInvalid: boolean, mode: keyof typeof MODE }) => {
    const initialStyles = {
        _hover: {
            boxShadow: 'rgba(14, 30, 37, 0.12) 0px 2px 4px 0px, rgba(14, 30, 37, 0.32) 0px 2px 16px 0px;'
        }
    }
    if (isInvalid) {
        return {
            border: '1px solid',
            borderColor: 'red.300',
            ...initialStyles
        }
    }
    if (mode === MODE.edit) {
        return {
            boxShadow: 'rgba(14, 30, 37, 0.12) 0px 2px 4px 0px, rgba(14, 30, 37, 0.32) 0px 2px 16px 0px;',
            ...initialStyles
        }
    }
    return initialStyles
};