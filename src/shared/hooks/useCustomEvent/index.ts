/* eslint-disable @typescript-eslint/no-unused-vars */
import { useEffect, useRef } from 'react';

export const EVENT_NAMES = {
    TODO_FOCUS: 'TODO_FOCUS',
    DISPLAY_TOATS: 'DISPLAY_TOATS'
} as const

interface CustomEventOptions<T> {
  eventName: keyof typeof EVENT_NAMES;
  callback: (data: T) => void;
}

const useCustomEvent = <T>({ eventName, callback }: CustomEventOptions<T>) => {
    const callbackRef = useRef<((data: T) => void) | undefined>(undefined);

    useEffect(() => {
        callbackRef.current = callback;
    }, [callback]);

    useEffect(() => {
        const eventHandler = (event: any) => {            
            if (callbackRef.current) {
                callbackRef.current(event.detail);
            }
        };

        window.addEventListener(eventName, eventHandler);

        return () => {
            window.removeEventListener(eventName, eventHandler);
        };
    }, [eventName]);

    const dispatchCustomEvent = (data: T) => {
        const customEvent = new CustomEvent(eventName, { detail: data });
        window.dispatchEvent(customEvent);
    };

    return { dispatchCustomEvent };
};

export default useCustomEvent;
