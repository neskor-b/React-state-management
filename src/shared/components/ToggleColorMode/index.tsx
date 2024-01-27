import React from 'react';

// UI
import { useColorMode, IconButton, Tooltip } from "@chakra-ui/react";
import { SunIcon, MoonIcon } from '@chakra-ui/icons'


const ToggleColorMode: React.FC = () => {
    const { toggleColorMode, colorMode } = useColorMode();

    return (
        <Tooltip hasArrow label={colorMode === 'light' ? 'Dark Mode' : 'Light Mode'}>
            <IconButton 
                aria-label='toggle light mode' 
                icon={colorMode === 'light' ? <MoonIcon /> : <SunIcon />} 
                onClick={toggleColorMode}
            />
        </Tooltip>
    );
};


export default ToggleColorMode;