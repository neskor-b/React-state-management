import { autorun, makeAutoObservable } from 'mobx';

// api
import { apiGetTodos, apiCreateTodo, apiUpdateTodo, apiDeleteTodo } from 'shared/api/apiRequests';

// utils
import { showToast } from 'shared/components/Toast';
import { prepareQuery } from 'shared/utils/query';

// types
import Ttodo from 'shared/api/models/todo';
import TCreateTodo from "shared/api/models/createTodo";
import TFilters from 'shared/api/models/filters';


interface State {
    items: Ttodo[];
    loading: Record<string, boolean>;
    isFetching: boolean;
    filters: TFilters;
}


class TodoStore {
    state: State = {
        items: [],
        loading: {},
        isFetching: false,
        filters: {
            status: '',
            search: '',
            orderby: 'createdAt',
            order: 'desc'
        }
    }


    constructor() {
        makeAutoObservable(this)
        autorun(() => {
            this.actions.fetchTodos();
        })
    }

    private index = (id: string) => this.state.items.findIndex(todo => todo.id === id)
    private enableLoading = (id: string) => this.state.loading[id] = true;
    private disableLoading = (id: string) => this.state.loading[id] = false;
    private sortByStatus = () => this.state.items.sort((a, b) => a.status === b.status ? 0 : a.status === 'active' ? -1 : 1);
    private setFetching = (value: true | false) => this.state.isFetching = value

    actions = {
        updateTodo: async (data: Ttodo) => {
            this.state.items[this.index(data.id)] = data;
            this.enableLoading(data?.id);
            try {
                await apiUpdateTodo(data);
                showToast({
                    description: 'Todo updated!',
                    status: 'success'
                })
                this.sortByStatus()
            } catch (e) {
                console.error(e);
                showToast({
                    description: 'Something went wrong!',
                    status: 'error'
                })
            } finally {
                this.disableLoading(data.id);
            }
        },
        setFilters: (data: TFilters) => {
            this.state.filters = data
        },


        deleteTodo: async (data: Ttodo) => {
            this.enableLoading(data.id);
            try {
                await apiDeleteTodo(data);
                this.state.items.splice(this.index(data.id), 1);
                showToast({
                    description: 'Todo deleted!',
                    status: 'info'
                })
            } catch (e) {
                console.error(e);
                showToast({
                    description: 'Something went wrong!',
                    status: 'error'
                })
            } finally {
                this.disableLoading(data.id);
            }
        },

        fetchTodos: async () => {
            this.setFetching(true)
            const query = prepareQuery({ filters: this.state.filters })
            try {
                const data = await apiGetTodos(query);
                this.state.items = data
                this.sortByStatus()
            } catch (e) {
                console.error(e);
                showToast({
                    description: 'Something went wrong!',
                    status: 'error'
                })
            } finally {
                this.setFetching(false)
            }
        },

        createTodo: async (data: TCreateTodo) => {
            this.enableLoading('todoForm')
            try {
                const { data: newTodo} = await apiCreateTodo(data);
                this.state.items.unshift(newTodo);
                this.sortByStatus();
                showToast({
                    description: 'Todo created!',
                    status: 'success'
                })
            } catch (e) {
                console.error(e);
            } finally {
                this.disableLoading('todoForm');
            }
        }
    }
}

export type { TodoStore } ;

export default TodoStore;