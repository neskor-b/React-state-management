import makeApiCall from 'shared/api';

// types
import Ttodo from 'shared/api/models/todo';
import TCreateTodo from '../models/createTodo';

export const apiGetTodos = async (query?: Record<string, string>) => makeApiCall.get<Ttodo[]>('/todos', { params: {...query, page: 1, limit: 3} });

export const apiCreateTodo = async (data: TCreateTodo) => makeApiCall.post<Ttodo>('/todos', data);

export const apiUpdateTodo = async (data: Ttodo) => makeApiCall.put<Ttodo>(`/todos/${data.id}`, data);

export const apiDeleteTodo = async (data: Ttodo) => makeApiCall.delete(`/todos/${data.id}`);
