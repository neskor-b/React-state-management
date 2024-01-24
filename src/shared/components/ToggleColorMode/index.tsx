import React from 'react';

// UI
import { Box, useColorMode, IconButton } from "@chakra-ui/react";
import { SunIcon, MoonIcon } from '@chakra-ui/icons'


const ToggleColorMode: React.FC = () => {
    const { toggleColorMode, colorMode } = useColorMode();

    return (
        <Box
            position="absolute"
            right={5}
            bottom={5}
        >
            <IconButton 
                aria-label='toggle light mode' 
                icon={colorMode === 'light' ? <MoonIcon /> : <SunIcon />} 
                onClick={toggleColorMode}
            />
        </Box>
    );
};


export default ToggleColorMode;