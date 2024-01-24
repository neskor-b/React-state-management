import React, { ReactNode, useState } from 'react';

// UI
import { Box, Flex, IconButton } from "@chakra-ui/react"
import { SettingsIcon } from '@chakra-ui/icons'

// components
import ToggleColorMode from 'shared/components/ToggleColorMode';

interface TodoLayoutProps {
    children: ReactNode;
}


const App: React.FC<{ children: ReactNode }> = ({ children }) => {
    return (
        <Box 
            pb={3} 
            flexGrow={1}
            maxWidth="600px"
            width="100%"
        >
            {children}
        </Box>
    );
}

const Widget: React.FC<{ children: ReactNode }> = ({ children }) => {
    return (
        <Box 
            pb={3} 
            flexGrow={1}
            width="100%"
        >
            {children}
        </Box>
    );
}

const Layout: React.FC<TodoLayoutProps> = ({ children }) => {
    const [isWidgetOpen, setIsWidgetOpen] = useState(false);
    const toggleWidget = () => setIsWidgetOpen(prevValue => !prevValue);

    let app, widget;

    React.Children.map(children, child => {
        if (React.isValidElement(child)) {
            switch (child.type) {
                case App:
                    app = child;
                    break;
                case Widget:
                    widget = child;
                    break;
                default:
                    break;
            }
        }
    });
    return (
        <Box 
            height="100%" 
            position="relative" 
            pt={2}
        >
            <Flex 
                height="100%"
                justifyContent="center"
                gap={3}
            >
                {app}
                {isWidgetOpen && widget}
            </Flex>
            <Flex
                position="fixed"
                width="fit-content"
                gap={2}
                right={5}
                bottom={5}
            >
                <IconButton 
                    aria-label='toggle logger' 
                    icon={<SettingsIcon /> } 
                    onClick={toggleWidget}
                />
                <ToggleColorMode />
            </Flex>
        </Box>
    );
}

export default Object.assign(Layout, {
    App,
    Widget
});
