import { makeAutoObservable } from 'mobx';

// types
import Ttodo from 'shared/types/todo';


class TodoStore {
    items: Ttodo[] = [];
    loading: Record<string, boolean> = {};

    constructor() {
        makeAutoObservable(this)
    }

    private index = (id: string) => this.items.findIndex(todo => todo.id === id)
    private enableLoading = (id: string) => this.loading[id] = true;
    private disableLoading = (id: string) => this.loading[id] = false;

    addTodo = (data: Ttodo) => {
        this.items.push(data);
    }

    changeTodo = (data: Ttodo) => {
        this.enableLoading(data.id);
        this.items[this.index(data.id)] = data;
        this.disableLoading(data.id);
    }

    deleteTodo = (data: Ttodo) => {
        this.enableLoading(data.id);
        this.items.splice(this.index(data.id), 1);
        this.disableLoading(data.id);
    }


}

export type { TodoStore } ;

export default TodoStore;