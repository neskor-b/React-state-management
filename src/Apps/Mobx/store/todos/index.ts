import { makeAutoObservable } from 'mobx';

// types
import Ttodo from 'shared/types/todo';


class TodoStore {
    items: Ttodo[] = [];
    loading: Record<string, boolean> = {};

    constructor() {
        makeAutoObservable(this)
    }

    addTodo = (data: Ttodo) => {
        this.items.push(data);
    }

    changeTodo = (data: Ttodo) => {
        if (!data.id) return;
        this.loading[data.id] = true;

        const index = this.items.findIndex(todo => todo.id === data.id);
        this.items[index] = data;

        this.loading[data.id] = false;
        
    }

    deleteTodo = (data: Ttodo) => {
        this.loading[data.id] = true;

        const index = this.items.findIndex(todo => todo.id === data.id);
        this.items.splice(index, 1);
        
        this.loading[data.id] = false;
        
    }
}

export default TodoStore;