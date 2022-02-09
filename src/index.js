import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import reportWebVitals from './reportWebVitals';
import App from './App';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import rootReducer from './redux/reducers/rootReducer';

const store = createStore(rootReducer)

// function addToDo(e) {
//     e.preventDefault();
//     let newToDo = document.querySelector('#to-do').value
//     if (newToDo.length < 1) {
//         document.querySelector('.error').classList.add('error_visible')
//     } else {
//         document.querySelector('.error').classList.remove('error_visible')
//         let newLi = document
//             .createElement('li')
//         newLi.textContent = newToDo
//         let deleteButton = document.createElement('button')
//         deleteButton.textContent = 'Delete'
//         deleteButton
//             .setAttribute('id', store.getState().id)
//         deleteButton.classList.add('deleteButton')
//         deleteButton.addEventListener('click', function (e) {
//             store.dispatch({
//                 type: 'DELETE',
//                 id: e.target.id
//             })
//             e.target.closest('li').remove()
//         })
//         document.querySelector('.todos').append(newLi)
//         document.querySelector('form').reset()
//         newLi.append(deleteButton)
//     }
// }
ReactDOM.render(
  <React.StrictMode>
      <Provider store={store}>
          <App />
      </Provider>
          {/*<h1 className='title'>To-do-s</h1>*/}
          {/*<form className='form' onSubmit={(e) => addToDo(e)}>*/}
          {/*    <label className='label' htmlFor='to-do'>Task:</label>*/}
          {/*    <input className='input' type='text' name='to-do' id='tod=o' placeholder='What would you like to do?'/>*/}
          {/*    <span className='error'>Input couldn't be empty</span>*/}
          {/*    <button type='submit' className='addButton' onSubmit={(e) => addToDo(e)}>Add a to-do</button>*/}
          {/*</form>*/}
          {/*<ul className='todos' />*/}
  </React.StrictMode>,
  document.getElementById('root')
);

reportWebVitals();
