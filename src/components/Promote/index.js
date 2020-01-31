import React from 'react';
import './styles.css';
import PropTypes from 'react-proptypes';

const Promote = ({ finishTurn, promotePiece }) => (
  <div className="promote-container">
    <button type="button" onClick={promotePiece} className="promote">Promote</button>
    <button type="button" onClick={finishTurn} className="finish">
        Finish turn
    </button>
  </div>
);
Promote.propTypes = {
  finishTurn: PropTypes.func.isRequired,
  promotePiece: PropTypes.func.isRequired,
};

export default Promote;
