import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {Provider} from 'react-redux';
import {createStore} from 'redux';

let initialState = {
    todos: [],
    id: 0
}
const store = createStore(rootReducer)

function rootReducer(state=initialState, action) {
    switch (action.type) {
        case 'ADD':
            let newState = { ...state }
            newState.id++
            return {
                ...newState,
                todos: [...newState.todos, { todo: action.todo, id: newState.id }]
            }
        case 'DELETE':
            return state
        default:
            return state
    }
}

function addToDo(e) {
    e.preventDefault();
    let newToDo = document.querySelector('#todo').value
    store.dispatch({
        type: 'ADD',
        todo: newToDo
    })
    let newLi = document
        .createElement('li')
    newLi.textContent = newToDo
    let deleteButton = document.createElement('button')
    deleteButton.textContent = 'Delete'
    console.log( `store.getState().id ${store.getState().id}`)
    deleteButton.setAttribute('id', store.getState().id)
    console.log( `deleteButton.id ${deleteButton.id}`)
    deleteButton.addEventListener('click', function (e) {
        e.preventDefault();
        console.log(e.target)
        store.dispatch({
            type: 'DELETE',
            id: e.target.id
        })
        console.log(`e.target.closest ${e.target.closest('li')}`)
        e.target.closest('li').remove()
    })
    document.querySelector('.todos').append(newLi)
    document.querySelector('form').reset()
    newLi.append(deleteButton)
}
ReactDOM.render(
  <React.StrictMode>
      <Provider store={store}>
          <h1 className='title'>To-do-s</h1>
          <ul className='todos'></ul>
          <form onSubmit={(e) => addToDo(e)}>
              <label htmlFor='todo'>Task: </label>
              <input type='text' name='todo' id='todo'/>
              <button type='button'>Add a to-do</button>
          </form>
      </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);

reportWebVitals();
