import { MODE } from 'shared/components/TodoItem/constants'
import Ttodo from 'shared/types/todo'

type TStyles = {
    _hover?: {
        boxShadow: string,
    },
    border?: string,
    borderColor?: string
    boxShadow?: string,
    backgroundColor?: string
}

type TGetCartStyles = (props: { isInvalid: boolean, mode: keyof typeof MODE, status: Ttodo['status'], colorMode: "light" | "dark"; }) => TStyles;

const BOX_SHADOW = 'rgba(14, 30, 37, 0.12) 0px 2px 4px 0px, rgba(14, 30, 37, 0.32) 0px 2px 16px 0px;'
const BORDER = '1px solid';
const BORDER_COLORS = {
    error: 'red.300'
}

export const getCartStyles: TGetCartStyles = ({ isInvalid, mode, status, colorMode }) => {
    const styles = {
        _hover: {
            boxShadow: BOX_SHADOW
        },
        border: undefined,
        borderColor: 'gray.300',
        boxShadow: 'rgba(60, 64, 67, 0.3) 0px 1px 2px 0px, rgba(60, 64, 67, 0.15) 0px 2px 6px 2px;'
    } as TStyles

    if (isInvalid){
        styles.borderColor = BORDER_COLORS.error;
        styles.border = BORDER
        styles.borderColor = BORDER_COLORS.error
    }
    if(mode === MODE.edit) {
        styles.boxShadow = BOX_SHADOW
    }
    if (status === 'completed') {
        styles.backgroundColor = colorMode === 'dark' ? 'blue.700' : 'blue.50';
    }
    return styles
};