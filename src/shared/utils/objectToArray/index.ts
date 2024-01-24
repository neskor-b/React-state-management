const objectToArray = <T>(object: Record<string, T>): T[] => {
    return Object.values(object)
}

export default objectToArray;