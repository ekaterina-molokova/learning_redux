import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
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
            let todos = state.todos.filter(value => value.id !== action.id);
            return { ...state, todos }
        default:
            return state
    }
}

function addToDo(e) {
    e.preventDefault();
    let newToDo = document.querySelector('#todo').value
    if (newToDo.length < 1) {
        document.querySelector('.error').classList.add('error_visible')
    } else {
        document.querySelector('.error').classList.remove('error_visible')
        let newLi = document
            .createElement('li')
        newLi.textContent = newToDo
        let deleteButton = document.createElement('button')
        deleteButton.textContent = 'Delete'
        deleteButton
            .setAttribute('id', store.getState().id)
        deleteButton.classList.add('deleteButton')
        deleteButton.addEventListener('click', function (e) {
            store.dispatch({
                type: 'DELETE',
                id: e.target.id
            })
            e.target.closest('li').remove()
        })
        document.querySelector('.todos').append(newLi)
        document.querySelector('form').reset()
        newLi.append(deleteButton)
    }
}
ReactDOM.render(
  <React.StrictMode>
      <Provider store={store}>
          <h1 className='title'>To-do-s</h1>
          <form className='form' onSubmit={(e) => addToDo(e)}>
              <label className='label' htmlFor='todo'>Task:</label>
              <input className='input' type='text' name='todo' id='todo' placeholder='What would you like to do?'/>
              <span className='error'>Input couldn't be empty</span>
              <button type='submit' className='addButton' onSubmit={(e) => addToDo(e)}>Add a to-do</button>
          </form>
          <ul className='todos' />
      </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);

reportWebVitals();
