import { addToDo, deleteToDo } from '../actions/actionCreators'

const initialState = {
    todos: [],
    id: 0
}

export default function rootReducer(state=initialState, action) {
    switch (action.type) {
        case addToDo:
            let newState = { ...state }
            newState.id++
            return {
                ...newState,
                todos: [...newState.todos, { task: action.task, id: newState.id }]
            }
        case deleteToDo:
            let todos = state.todos.filter(value => value.id !== action.id);
            return { ...state, todos }
            default:
                return state
    }
}