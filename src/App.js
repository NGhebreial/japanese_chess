import React from 'react';
import './assets/App.css';
import Board from './components/Board';
import { TURNS } from './components/constants';
import Turn from './components/Turn';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.switchTurn = this.switchTurn.bind(this);
    this.state = {
      turn: TURNS.black,
    }
  }

  switchTurn = () => {
    const { turn } = this.state;
    this.setState({
      turn: turn === TURNS.black ? TURNS.white : TURNS.black,
    });
  };

  render() {
    const { turn } = this.state;
    return (
      <div className="App">
        <header className="App-header">
          Japanese Chess
        </header>
        <div className="turn-col">
          <Turn turn={turn}/>
        </div>
        <div className="board-col">
          <Board turn={turn} switchTurn={this.switchTurn}/>
        </div>
      </div>
    );
  }


}

export default App;
