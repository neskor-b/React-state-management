import { makeAutoObservable } from 'mobx';

import TodosStore from './todos';

class RootStore {
    todos = new TodosStore();
    constructor() {
        makeAutoObservable(this)
    }
}
export type { RootStore } ;

export default new RootStore();
