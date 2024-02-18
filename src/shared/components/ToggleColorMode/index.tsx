import React from 'react';
import { useTranslation } from 'react-i18next';

// UI
import { useColorMode, IconButton, Tooltip } from "@chakra-ui/react";
import { SunIcon, MoonIcon } from '@chakra-ui/icons'


const ToggleColorMode: React.FC = () => {
    const { t } = useTranslation();
    const { toggleColorMode, colorMode } = useColorMode();

    return (
        <Tooltip hasArrow label={colorMode === 'light' ? t('settings.tooltips.darkMode') : t('settings.tooltips.lightMode')}>
            <IconButton 
                aria-label='toggle light mode' 
                icon={colorMode === 'light' ? <MoonIcon /> : <SunIcon />} 
                onClick={toggleColorMode}
            />
        </Tooltip>
    );
};


export default ToggleColorMode;