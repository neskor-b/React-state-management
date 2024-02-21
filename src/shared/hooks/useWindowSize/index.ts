import { useState, useLayoutEffect } from 'react';

export const SIZES = {
    'sm': 640,
    'md': 768,
    'lg': 1215,
    'xl': 1580
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
    const isDesktop = (size.width || 0) > SIZES.lg;
    const isMobile = (size.width || 0) < SIZES.sm;
    return {
        width: size.width,
        height: size.height,
        isDesktop,
        isMobile
    };
};

export default useWindowSize;