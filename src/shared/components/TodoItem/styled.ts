import styled, { checkStyles } from "shared/HOC/withChakra";
import { Card } from '@chakra-ui/react'

// data
import { MODE } from 'shared/components/TodoItem/constants'

// types
import Ttodo from 'shared/types/todo';

const BOX_SHADOW = 'rgba(60, 64, 67, 0.3) 0px 1px 2px 0px, rgba(60, 64, 67, 0.15) 0px 2px 6px 2px;'
const EDIT_BOX_SADOW = 'rgba(14, 30, 37, 0.12) 0px 2px 4px 0px, rgba(14, 30, 37, 0.32) 0px 2px 16px 0px;'


type TStyledCardProps = {
    isInvalid: boolean,
    mode: keyof typeof MODE, 
    status: Ttodo['status'], 
    colorMode: 'light' | 'dark'
}

export const StyledCard = styled<TStyledCardProps>(Card, props => checkStyles({
    _hover: {
        boxShadow: EDIT_BOX_SADOW
    },
    transition: 'all 0.2s ease-in-out',
    border: props.isInvalid ? '1px solid' : '',
    borderColor: props.isInvalid ? 'red.300' : 'gray.300',
    boxShadow: props.mode === MODE.edit ? EDIT_BOX_SADOW : BOX_SHADOW,
    transform: props.mode === MODE.edit ? 'scale(1.02)' : '',
    backgroundColor: props.status === 'completed' ? props.colorMode === 'dark' ? 'blue.700' : 'blue.50' : ''
}))