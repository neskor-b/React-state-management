import React, { ReactNode } from 'react';

// UI
import { Box, Center } from "@chakra-ui/react";

interface TodoLayoutProps {
    children: ReactNode;
}


const Body: React.FC<{ children: ReactNode }> = ({ children }) => {
    return (
        <Box pb={3}>
            {children}
        </Box>
    );
}

const Header: React.FC<{ children: ReactNode }> = ({ children }) => {
    return (
        <Box pb={3} pt={3}>
            {children}
        </Box>
    );
}

const Footer: React.FC<{ children: ReactNode }> = ({ children }) => {
    return (
        <Box>
            {children}
        </Box>
    );
}

const Layout: React.FC<TodoLayoutProps> = ({ children }) => {
    let body, header, footer;

    React.Children.map(children, child => {
        if (React.isValidElement(child)) {
            switch (child.type) {
                case Body:
                    body = child;
                    break;
                case Header:
                    header = child;
                    break;
                case Footer:
                    footer = child;
                    break;
                default:
                    break;
            }
        }
    });
    return (
        <Center minW="320px">
            <Box width="100%" maxW="540px">
                {header}
                {body}
                {footer}
            </Box>
        </Center>
    );
}

export default Object.assign(Layout, {
    Body,
    Header,
    Footer
});
