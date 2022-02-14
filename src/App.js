import React from 'react';
import './App.css';
import ToDoList from './ToDoList';

function App({ store }) {
  return (
      <section className='App'>
        <h1>See Our ToDos</h1>
        <ToDoList store={store} />
      </section>
  );
}

export default App;
