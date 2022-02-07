import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {Provider} from 'react-redux';
import {createStore} from 'redux';
// import {combineReducers} from 'redux';

const initialState = {
    count: 0
}

function rootReducer(state=initialState, action) {
    if (action.type === 'INCREMENT') {
        let newState = Object.assign({}, state)
            newState.count++
        return newState
    }
    if (action.type === 'DECREMENT') {
        let newState = Object.assign({}, state)
        newState.count--
        return newState
    }
    return state;
}

const store = createStore(rootReducer)
console.log(store.getState())

function increment () {
    return {type: 'INCREMENT'}
}

function decrement () {
    return {type: 'DECREMENT'}
}

store.dispatch({type: 'INCREMENT'})
console.log(store.getState())

store.dispatch(increment())
console.log(store.getState())

store.dispatch({type: 'DECREMENT'})
console.log(store.getState())

store.dispatch(decrement())
console.log(store.getState())

ReactDOM.render(
  <React.StrictMode>
      <Provider store={store}>
          <App state={initialState} />
      </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
