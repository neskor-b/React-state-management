import TodosStore from './todos';

class RootStore {
    todos = new TodosStore();
}
export type { RootStore } ;

export default new RootStore();
