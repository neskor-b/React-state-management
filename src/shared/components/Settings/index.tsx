import React from "react";
import { useMatch, useNavigate } from "react-router-dom";

// components
import ToggleColorMode from 'shared/components/ToggleColorMode';

// hooks
import useLocalStorage, { CUSTOM_EVENTS } from "shared/hooks/useLocalStorage";
import useWindowSize from "shared/hooks/useWindowSize";

// UI
import { Flex, IconButton, Icon, Tooltip } from "@chakra-ui/react"
import { InfoIcon, ChevronRightIcon, ChevronUpIcon } from '@chakra-ui/icons'
import { AiFillHome } from "react-icons/ai";

export type TSettings = {
    isWidgetOpen: boolean;
}

const INITIAL_SETTINGS: TSettings = {
    isWidgetOpen: false
}


const Settings = () => {
    const { isDesktop } = useWindowSize();
    const isRoot = useMatch({ path: '/' });    
    const navigate = useNavigate();
    

    const { pageValue: settings, setPageValue: setSettings } = useLocalStorage<TSettings>({
        key: CUSTOM_EVENTS.UPDATE_SETTINGS,
        defaultValue: INITIAL_SETTINGS
    });

    const toggleWidget = () => setSettings({ ...settings, isWidgetOpen: !settings.isWidgetOpen });

    return (
        <Flex
            position={isDesktop ? 'fixed' : 'absolute'}
            width="fit-content"
            gap={2}
            zIndex={1000}
            right={isDesktop ? 5 : undefined}
            left={isDesktop ? undefined : 2}
            bottom={isDesktop ? 5 : undefined}
            top={isDesktop ? undefined : 2}
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
                        label={settings?.isWidgetOpen ? 'Hide info' : 'Show info'}
                    >
                        <IconButton 
                            aria-label='toggle widget' 
                            icon={settings?.isWidgetOpen ? ( isDesktop ? <ChevronRightIcon /> : <ChevronUpIcon />) : <InfoIcon /> } 
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