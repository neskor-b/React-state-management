import { autorun, makeAutoObservable, reaction } from 'mobx';

// api
import { apiGetTodos, apiCreateTodo, apiUpdateTodo, apiDeleteTodo } from 'shared/api/apiRequests';

// utils
import { showToast } from 'shared/components/Toast';
import { prepareQuery } from 'shared/utils/query';

// types
import Ttodo from 'shared/api/models/todo';
import TCreateTodo from "shared/api/models/createTodo";
import TFilters from 'shared/api/models/filters';
import TPagination from 'shared/api/models/pagination';


interface State {
    items: Ttodo[];
    loading: Record<string, boolean>;
    isFetching: boolean;
    filters: TFilters;
    pagination: TPagination;
}


class TodoStore {
    state: State = {
        items: [],
        loading: {},
        isFetching: false,
        filters: {
            status: '',
            search: ''
        },
        pagination: {
            limit: 5,
            page: 1,
            hasNext: false
        }
    }


    constructor() {
        makeAutoObservable(this)
        autorun(() => {
            this.actions.fetchTodos();
        })
        reaction(
            () => this.state.items.length,
            itemsLength => {
                this.state.pagination.hasNext = !!itemsLength;
            }
        );
    }

    private index = (id: string) => this.state.items.findIndex(todo => todo.id === id)
    private enableLoading = (id: string) => this.state.loading[id] = true;
    private disableLoading = (id: string) => this.state.loading[id] = false;
    private sortByStatus = () => this.state.items.sort((a, b) => a.status === b.status ? 0 : a.status === 'active' ? -1 : 1);

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
        updatePagination: <K extends keyof TPagination>(key: K, value: TPagination[K]) => this.state.pagination[key] = value,

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
            this.state.isFetching = true;
            const query = prepareQuery({ filters: this.state.filters, pagination: this.state.pagination })
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
                this.state.isFetching = false;
            }
        },

        createTodo: async (data: TCreateTodo) => {
            this.enableLoading('todoForm')
            try {
                const { data: newTodo} = await apiCreateTodo(data);
                this.state.items.push(newTodo);
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