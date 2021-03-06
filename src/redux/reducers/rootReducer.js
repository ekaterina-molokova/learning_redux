const initialState = {
    todos: [],
    id: 0
}

export default function rootReducer(state=initialState, action) {
    switch (action.type) {
        case 'ADD':
            let newState = { ...state }
            newState.id++
            return {
                ...newState,
                todos: [...newState.todos, { task: action.task, id: newState.id }]
            }
        case 'DELETE':
            let todos = state.todos.filter(value => value.id !== action.id);
            return { ...state, todos }
        default:
                return state
    }
}