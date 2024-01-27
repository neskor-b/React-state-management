import { makeAutoObservable } from 'mobx';

import TodosStore from './todos';
import Filters from './filters';

class RootStore {
    todos = new TodosStore();
    filters = new Filters();
    constructor() {
        makeAutoObservable(this)
    }
}
export type { RootStore } ;

export default new RootStore();
