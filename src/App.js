import './App.css';
import React from "react";

function App({count, increment, decrement}) {
  return (
    <section className="App">
        <h1 className='title'>{`Count is: ${count.count}`}</h1>
        <button type='button' className='button' onClick={increment}>Increment</button>
        <button type='button' className='button' onClick={decrement}>Decrement</button>
        <button type='reset' className='button'>Reset</button>
    </section>
  );
}

export default App;
