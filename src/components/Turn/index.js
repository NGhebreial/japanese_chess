import PropTypes from 'react-proptypes';
import React from 'react';

const Turn = ({ turn }) => (
  <div>
    <div>
      Turn of:
      {turn}
    </div>
  </div>
);
Turn.propTypes = {
  turn: PropTypes.string.isRequired,
};
export default Turn;
