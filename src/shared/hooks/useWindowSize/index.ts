import { useState, useLayoutEffect } from 'react';

export const SIZES = {
    'sm': 640,
    'md': 768,
    'lg': 1024,
    'xl': 1280
}

const useWindowSize = () => {
    const [size, setSize] = useState<{ width: number | null, height: number | null }>({
        width: null,
        height: null
    });

    useLayoutEffect(() => {
        const handleResize = () => {
            setSize({
                width: window.innerWidth,
                height: window.innerHeight
            });
        };

        handleResize();
        window.addEventListener('resize', handleResize);

        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);

    return size || 0;
};

export default useWindowSize;