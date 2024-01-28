import Ttodo from "./todo";

type TCreateTodo = Pick<Ttodo, 'createdAt' | 'status' | 'title'>

export default TCreateTodo;