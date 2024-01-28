import { makeAutoObservable } from 'mobx';

// api
import { apiGetTodos, apiCreateTodo, apiUpdateTodo, apiDeleteTodo } from 'shared/api/todos';

// types
import Ttodo from 'shared/api/models/todo';
import TCreateTodo from "shared/api/models/createTodo";


class TodoStore {
    items: Ttodo[] = [];
    loading: Record<string, boolean> = {};
    isFetching: boolean = false;

    constructor() {
        makeAutoObservable(this)
        this.fetchTodos();
    }

    private index = (id: string) => this.items.findIndex(todo => todo.id === id)
    private enableLoading = (id: string) => this.loading[id] = true;
    private disableLoading = (id: string) => this.loading[id] = false;

    changeTodo = async (data: Ttodo) => {
        this.items[this.index(data.id)] = data;
        this.enableLoading(data?.id);
        try {
            await apiUpdateTodo(data);
        } catch (e) {
            console.error(e);
        } finally {
            this.disableLoading(data.id);
        }

    }

    deleteTodo = async (data: Ttodo) => {
        this.enableLoading(data.id);
        try {
            await apiDeleteTodo(data);
            this.items.splice(this.index(data.id), 1);
        } catch (e) {
            console.error(e);
        } finally {
            this.disableLoading(data.id);
        }
    }

    fetchTodos = async () => {
        this.isFetching = true;
        try {
            const { data } = await apiGetTodos();
            this.items = data;
        } catch (e) {
            console.error(e);
        } finally {
            this.isFetching = false;
        }
    }

    createTodo = async (data: TCreateTodo) => {
        this.enableLoading('todoForm')
        try {
            const { data: newTodo} = await apiCreateTodo(data);
            this.items.push(newTodo);
        } catch (e) {
            console.error(e);
        } finally {
            this.disableLoading('todoForm');
        }
    }
}

export type { TodoStore } ;

export default TodoStore;