import React, { FC } from 'react';
// components
import { Spinner as ChakraSpinner } from '@chakra-ui/react'
import { Center, Box, Container } from './styled';

type SpinnerProps = {
    isLoading: boolean,
    children: React.ReactNode,
}

const Spinner: FC<SpinnerProps> = ({isLoading, children}) => (
    <Container>
        {isLoading && (
            <Center>
                <ChakraSpinner color='blue.500' />
            </Center>
        )}
        <Box isLoading={isLoading}>
            {children}
        </Box>
    </Container>
);

export default Spinner;
