import React from 'react';
import './assets/App.css';
import Board from './components/Board';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        Japanese Chess
      </header>
      <div>
        <Board/>
      </div>
    </div>
  );
}

export default App;
