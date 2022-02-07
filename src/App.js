import './App.css';

function App({state, increment, root}) {
  return (
    <section className="App">
      <h1 className='title'>{`Count is ${state.count}`}</h1>
      <button type='button' className='button'>Increment</button>
      <button type='button' className='button'>Decrement</button>
      <button type='reset' className='button'>Reset</button>
    </section>
  );
}

export default App;
