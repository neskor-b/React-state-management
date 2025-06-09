import Ttodo from "shared/api/models/todo";

export const sortTodos = (data: Ttodo[]) => data.sort((a, b) => a.status === b.status ? 0 : a.status === 'active' ? -1 : 1)
export const findIndex = (data: Ttodo[], id: string) => data.findIndex(todo => todo.id === id);