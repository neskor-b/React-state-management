import React from 'react';

// UI
import { useColorMode, IconButton } from "@chakra-ui/react";
import { SunIcon, MoonIcon } from '@chakra-ui/icons'


const ToggleColorMode: React.FC = () => {
    const { toggleColorMode, colorMode } = useColorMode();

    return (
        <IconButton 
            aria-label='toggle light mode' 
            icon={colorMode === 'light' ? <MoonIcon /> : <SunIcon />} 
            onClick={toggleColorMode}
        />
    );
};


export default ToggleColorMode;