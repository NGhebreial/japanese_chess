import React from 'react';
import './assets/App.css';
import BoardContainer from './components/containers/BoardContainer';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        Japanese Chess
      </header>
      <div>
        <BoardContainer/>
      </div>
    </div>
  );
}

export default App;
