import React from "react";

// components
import ToggleColorMode from 'shared/components/ToggleColorMode';

// hooks
import useLocalStorage, { CUSTOM_EVENTS } from "shared/hooks/useLocalStorage";

// UI
import { Flex, IconButton } from "@chakra-ui/react"
import { SettingsIcon, ChevronRightIcon } from '@chakra-ui/icons'

export type TSettings = {
    isWidgetOpen: boolean;
}

const INITIAL_SETTINGS: TSettings = {
    isWidgetOpen: false
}


const Settings = () => {
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
            <IconButton 
                aria-label='toggle logger' 
                icon={settings?.isWidgetOpen ? <ChevronRightIcon /> : <SettingsIcon /> } 
                onClick={toggleWidget}
            />
            <ToggleColorMode />
        </Flex>
    )
}

export default Settings