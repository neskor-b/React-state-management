import { useState, useLayoutEffect } from 'react';

export const SIZES = {
    'sm': 640,
    'md': 768,
    'lg': 1215,
    'xl': 1580
}

const useWindowSize = () => {
    const [size, setSize] = useState<{ width: number, height: number }>({
        width: window.innerWidth,
        height: window.innerWidth
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

    const isDesktop = size.width > SIZES.lg;
    const isMobile = size.width < SIZES.sm;
    return {
        width: size.width,
        height: size.height,
        isDesktop,
        isMobile
    };
};

export default useWindowSize;