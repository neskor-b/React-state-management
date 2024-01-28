import Ttodo from 'shared/api/models/todo'

export const validateTodo = (title: Ttodo['title']) => {
    if(!title) {
        return true
    }
    return false
}