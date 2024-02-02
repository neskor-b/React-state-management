import Ttodo from "./todo";

type TCreateTodo = Pick<Ttodo, 'createdAt' | 'status' | 'title' | 'completedAt'>

export default TCreateTodo;