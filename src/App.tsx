import React from 'react';
import './App.css';
import AsyncTodo from './features/Async/AcyncTodo/AsyncTodo'
import WrapperTodo from './features/Todos_ofline/WrapperTodo/WrapperTodo'


function App() {
  return (
    <div className="App">
     <WrapperTodo/>
      <AsyncTodo />
    </div>
  );
}

export default App;
