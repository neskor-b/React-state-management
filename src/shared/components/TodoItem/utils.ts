import Ttodo from 'shared/types/todo'

export const validateTodo = (title: Ttodo['title']) => {
    if(!title) {
        return true
    }
    return false
}