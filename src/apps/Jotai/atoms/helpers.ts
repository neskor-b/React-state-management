import { atom, WritableAtom } from "jotai";
import Ttodo from "shared/api/models/todo";
import { sortTodos } from "shared/helpers";

export function createArrayAtomCrud(targetAtom: WritableAtom<Ttodo[], any, any>) {
    return {
        add: atom(null, (get, set, item: Ttodo) => {
            const sortedItems = sortTodos([item, ...get(targetAtom)]);
            set(targetAtom, sortedItems);
        }),
        update: atom(null, (get, set, item: Ttodo) => {
            const sortedItems = sortTodos(get(targetAtom).map(el => el.id === item.id ? item : el));
            set(targetAtom, sortedItems);
        }),
        remove: atom(null, (get, set, id: string) => {
            set(targetAtom, get(targetAtom).filter(el => el.id !== id));
        }),
        set: atom(null, (_, set, items: Ttodo[]) => {
            const sortedItems = sortTodos(items);
            set(targetAtom, sortedItems);
        })
    };
}