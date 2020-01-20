import React from 'react';
import './styles.css';

const Promote = ({ finishTurn, promotePiece }) => {
  return (
    <div className="promote-container">
      <button type="button" onClick={promotePiece} className="promote">Promote</button>
      <button type="button" onClick={finishTurn} className="finish">
        Finish turn
      </button>
    </div>
  );
};

export default Promote;
