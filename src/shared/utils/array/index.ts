
export const push = <T>(arr: any[], element: T) => ([...arr, element]);

export const remove = <T>(arr: T[], removeIndex: number | ((e: T) => boolean)) => {
    const index = typeof removeIndex === 'number' ? removeIndex : arr.findIndex(removeIndex);
    return [...arr.slice(0, index), ...arr.slice(index + 1, arr.length)]
};

export const update = <T>(arr: T[], findIndex: number | ((e: T) => boolean), element: T) => {
    const index = typeof findIndex === 'number' ? findIndex : arr.findIndex(findIndex);
    return [...arr.slice(0, index), element, ...arr.slice(index + 1, arr.length)]
};

export const filter = <T>(arr: T[], callback: (e: T) => boolean) => arr.filter(callback);
