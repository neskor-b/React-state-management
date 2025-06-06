import { useEffect, useState } from 'react';

const REQUIRED_ENV_VARS = [
    'REACT_APP_API_KEY',
    'REACT_APP_PROTOCOL',
    'REACT_APP_API_URL'
] as const;

type EnvVar = typeof REQUIRED_ENV_VARS[number];

const getMissingEnvVars = (): EnvVar[] => {
    const env = process.env as any;
    return REQUIRED_ENV_VARS.filter(key => !env[key]);
};

export const useEnvCheck = (): boolean => {
    const [hasMissingVars, setHasMissingVars] = useState(false);

    useEffect(() => {
        const missingVars = getMissingEnvVars();

        if (missingVars.length > 0) {
            console.error(
                `❌ Missing required environment variables: ${missingVars.join(', ')}`
            );
            setHasMissingVars(true);
        }
    }, []);

    return hasMissingVars;
};
