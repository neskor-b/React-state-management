import { atom, WritableAtom } from "jotai";
import Ttodo from "shared/api/models/todo";

const sortTodos = (data: Ttodo[]) => data.sort((a, b) => a.status === b.status ? 0 : a.status === 'active' ? -1 : 1)

export function createArrayAtomCrud(targetAtom: WritableAtom<Ttodo[], any, any>) {
    return {
        add: atom(null, (get, set, item: Ttodo) => {
            set(targetAtom, [item, ...get(targetAtom)]);
        }),
        update: atom(null, (get, set, item: Ttodo) => {
            set(targetAtom, get(targetAtom).map(el => el.id === item.id ? item : el));
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