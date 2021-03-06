import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import reportWebVitals from './reportWebVitals';
import App from './App';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import rootReducer from './redux/reducers/rootReducer';

const store = createStore(rootReducer)

ReactDOM.render(
  <React.StrictMode>
      <Provider store={store}>
          <App store={store} />
      </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);

reportWebVitals();
