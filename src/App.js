// App.js

import React from 'react';
import './App.css'; // Import your CSS file for global styles
import TodoList from './TodoList';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>React Todo List</h1>
        <a href="https://reactjs.org" target="_blank" rel="noopener noreferrer"></a>
      </header>
      <main>
        <TodoList />
      </main>
    </div>
  );
}

export default App;
