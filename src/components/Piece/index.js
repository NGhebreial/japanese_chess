import React from "react";
import PropTypes from 'react-proptypes';
import './styles.css'

/**
 * Auxiliary class with common methods for the pieces
 * */
class Piece extends React.PureComponent {
  name = () => {
    return '';
  };

  imageLink = () => {
    return '';
  };

  imagePromoted = () => {
    return '';
  };

  render() {
    const { side, isPromoted } = this.props;
    return (
      <div className="piece">
        <img src={!isPromoted ? this.imageLink() : this.imagePromoted()} alt={this.name()}
             className={side}/>
      </div>
    );
  }
}

Piece.propsTypes = {
  side: PropTypes.string.isRequired,
  isPromoted: PropTypes.bool.isRequired,
};
export default Piece;
