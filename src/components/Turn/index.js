import PropTypes from 'react-proptypes';
import React from "react";

class Turn extends React.Component {

  render() {
    const { turn } = this.props;
    return (
      <div>
        <div>Turn of: {turn}</div>
      </div>
    );
  }
}

Turn.propTypes = {
  turn: PropTypes.string.isRequired
};
export default Turn;
