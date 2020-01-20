import React from "react";
import PropTypes from 'react-proptypes';
import './styles.css'

/**
 * Auxiliary class with common methods for the pieces
 * */
class Piece extends React.Component {
  name = () => {
    return '';
  };

  imageLink = () => {
    return '';
  };

  imagePromoted = () => {
    return '';
  };

  isPromotable = () => {
    throw new Error('isPromotable must be overridden in the child class');
  };

  attackCoords = () => {
    throw new Error('attackCoords must be overridden in the child class');
  };

  promotedAttackCoords = () => {
    return [];
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
