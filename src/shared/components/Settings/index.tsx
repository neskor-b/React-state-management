import React from "react";
import { useMatch, useNavigate } from "react-router-dom";

// components
import ToggleColorMode from 'shared/components/ToggleColorMode';

// hooks
import useLocalStorage, { CUSTOM_EVENTS } from "shared/hooks/useLocalStorage";

// UI
import { Flex, IconButton, Icon, Tooltip } from "@chakra-ui/react"
import { SettingsIcon, ChevronRightIcon } from '@chakra-ui/icons'
import { AiFillHome } from "react-icons/ai";

export type TSettings = {
    isWidgetOpen: boolean;
}

const INITIAL_SETTINGS: TSettings = {
    isWidgetOpen: false
}


const Settings = () => {
    const isRoot = useMatch({ path: '/' });    
    const navigate = useNavigate();

    const { pageValue: settings, setPageValue: setSettings } = useLocalStorage<TSettings>({
        key: CUSTOM_EVENTS.UPDATE_SETTINGS,
        defaultValue: INITIAL_SETTINGS
    });

    const toggleWidget = () => setSettings({ ...settings, isWidgetOpen: !settings.isWidgetOpen });

    return (
        <Flex
            position="fixed"
            width="fit-content"
            gap={2}
            right={5}
            bottom={5}
        >
            {!isRoot && (
                <>
                    <Tooltip hasArrow label="Go to Home page">
                        <IconButton
                            icon={<Icon as={AiFillHome}/>} 
                            insetBlockEnd={0} 
                            aria-label='go to home page' 
                            onClick={() => navigate('/')}
                        />
                    </Tooltip>
                    <Tooltip 
                        hasArrow 
                        // label={settings?.isWidgetOpen ? 'Hide Widget' : 'Show Widget'}
                        label="Not done yet"
                    >
                        <IconButton 
                            isDisabled
                            aria-label='toggle logger' 
                            icon={settings?.isWidgetOpen ? <ChevronRightIcon /> : <SettingsIcon /> } 
                            onClick={toggleWidget}
                        />
                    </Tooltip>

                </>

            )}
            <ToggleColorMode />
        </Flex>
    )
}

export default Settings