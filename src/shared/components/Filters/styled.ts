import { 
    Box
} from "@chakra-ui/react";
import styled, {checkStyles} from "shared/HOC/withChakra";


export const Hide = styled<{ isHiden: boolean, colorMode: 'light' | 'dark' }>(Box, ({ isHiden }) => checkStyles(
    {
        position: 'relative',
        height: isHiden ? '15px' : '60px',
        overflow: 'hidden',
        transition: 'all 0.2s ease-in-out',
        borderRadius: '5px',
        // backgroundColor: isHiden ? 'gray.200' : 'white',
        border: '1px solid',
        borderColor: 'gray.300',
        marginBottom: '10px',
        cursor: 'pointer'
    }
));