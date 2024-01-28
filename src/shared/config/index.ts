function getEnvVar(variableName: string) {
    const envVar = process.env[variableName];
    
    if (envVar === undefined) {
        throw new Error(`Env variable ${variableName} is required`)
    }
    
    return envVar;
}

const generateApiUrl = () => {
    const apiKey = getEnvVar("REACT_APP_API_KEY");
    const proptocol = getEnvVar("REACT_APP_PROTOCOL");
    const url = getEnvVar("REACT_APP_API_URL");

    if (apiKey && proptocol && url) {
        return `${proptocol}://${apiKey}${url}`;
    } else {
        return ''
    }
}

export const API_URL = generateApiUrl();
