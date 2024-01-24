
const arrayToObject = <T>(array: T[], key: keyof T): Record<string, T> => {
    return array.reduce((acc, cur) => {
        const keyValue = cur[key] as string;
        return {...acc, [keyValue]: cur}
    }, {})
}

export default arrayToObject;