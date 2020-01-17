import PropTypes from 'react-proptypes';
import React from "react";

const Turn = ({ turn }) => {
  return (
    <div>
      <div>{turn}</div>
    </div>
  );
};

Turn.propTypes = {
  turn: PropTypes.string.isRequired
};
export default Turn;
