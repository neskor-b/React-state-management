import React, { FC } from 'react';
// components
import { Spinner as ChakraSpinner, Box, Center } from '@chakra-ui/react'

type SpinnerProps = {
    isLoading: boolean,
    children: React.ReactNode,
}

const Spinner: FC<SpinnerProps> = ({isLoading, children}) => (
    <Box 
        position="relative" 
    >
        {isLoading && 
        <Center 
            width="100%" 
            height="100%" 
            position="absolute"
        >
            <ChakraSpinner 
                color='blue.500'
            />
        </Center>
        }
        <Box pointerEvents={isLoading ? 'none' : 'auto'} opacity={isLoading ? 0.5 : 1}>
            {children}
        </Box>
    </Box>
);

export default Spinner;
