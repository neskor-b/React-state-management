import { 
    Box
} from "@chakra-ui/react";
import styled, {checkStyles} from "shared/HOC/withChakra";


export const Hide = styled<{ isHiden: boolean, colorMode: 'light' | 'dark' }>(Box, ({ isHiden, colorMode }) => checkStyles(
    {
        position: 'relative',
        height: isHiden ? '15px' : '60px',
        overflow: 'hidden',
        transition: 'all 0.2s ease-in-out',
        borderRadius: '5px',
        border: '1.2px solid',
        borderColor: colorMode === 'dark' ? 'gray.700' : 'gray.300',
        marginBottom: '20px',
        padding: isHiden ? 0 : ' 10px 40px 10px 10px',
        boxShadow: isHiden ? '' : 'rgba(0, 0, 0, 0.16) 0px 1px 4px;'
    }
));