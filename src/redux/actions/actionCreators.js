const ADD = 'ADD'
const DELETE = 'DELETE'

export function addToDo(task) {
    return {
        type: ADD,
        task
    }
}

export function deleteToDo(id) {
    return {
        type: DELETE,
        id
    }
}