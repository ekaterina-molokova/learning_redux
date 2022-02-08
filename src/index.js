import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {Provider} from 'react-redux';
import {createStore} from 'redux';

let initialState = {
    count: 0
}
const store = createStore(rootReducer)
let newState = {...initialState}
console.log(`newState ${newState.count}`)

function rootReducer(state=initialState, action) {
    switch (action.type) {
        case 'INCREMENT':
            newState.count++;
            return newState
        case 'DECREMENT':
            newState.count--;
            return newState
        default:
            return state
    }
}

function increment() {
    store.dispatch({
        type: 'INCREMENT'
    })
    console.log(newState.count)
}

function decrement() {
    store.dispatch({
        type: 'DECREMENT'
    })
    console.log(newState.count)
}

ReactDOM.render(
  <React.StrictMode>
      <Provider store={store}>
          <App count={newState} increment={increment} decrement={decrement} />
      </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);

reportWebVitals();
