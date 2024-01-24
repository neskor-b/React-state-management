import { useState } from 'react';

export default function useArray<T>(defaultValue: T[]) {
    const [array, setArray] = useState<T[]>(defaultValue);

    function push(element: T) {
        setArray((a: T[]) => [...a, element]);
        return [...array, element];
    }

    function filter(callback: (e: T) => boolean) {
        setArray((a: T[]) => a.filter(callback));
        return array.filter(callback);
    }

    function update(newElement: T, findIndex: number | ((element: T) => boolean)) {

        const index = typeof findIndex === 'number' ? findIndex : array.findIndex(findIndex);
        setArray((a: T[]) => [
            ...a.slice(0, index),
            newElement,
            ...a.slice(index + 1, a.length)
        ]);
    }

    function remove(index: number) {
        setArray((a: T[]) => [...a.slice(0, index), ...a.slice(index + 1, a.length)]);

        return [...array.slice(0, index), ...array.slice(index + 1, array.length)];
    }

    function clear() {
        setArray([]);
        return([]);
    }

    return { array, set: setArray, push, filter, update, remove, clear };
}
