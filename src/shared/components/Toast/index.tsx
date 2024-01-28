import React, { FC } from 'react';
import {  UseToastOptions, useToast } from '@chakra-ui/react';

// hooks
import useCustomEvent, { EVENT_NAMES } from 'shared/hooks/useCustomEvent';

export const showToast = (data?: UseToastOptions) => {    
    const config = {
        duration: 3000,
        ...data
    }
    const customEvent = new CustomEvent(EVENT_NAMES.DISPLAY_TOATS, { detail: config });
    window.dispatchEvent(customEvent);
};

const Toast: FC = () => {
    const toast = useToast();
    useCustomEvent<UseToastOptions>({
        eventName: EVENT_NAMES.DISPLAY_TOATS,
        callback: config => toast(config)
    })
    return <></>
}

export default Toast;