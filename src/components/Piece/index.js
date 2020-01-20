import React from "react";
import PropTypes from 'react-proptypes';
import './styles.css'

/**
 * Auxiliary class with common methods for the pieces
 * */
class Piece extends React.Component {
  constructor(props) {
    super(props);
    this.promote = this.promote.bind(this);
    this.state = {
      isPromoted: false,
      attackCoords: [],
    };
  }

  promote = () => {
    if (this.isPromotable) {
      this.setState({ isPromoted: true })
    }
  };

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
    const { isPromoted } = this.state;
    const { side } = this.props;
    return (
      <div className="piece">
        <img src={!isPromoted ? this.imageLink() : this.imagePromoted()} alt={this.name()}
             className={side}/>
      </div>
    );
  }
}

Piece.propsTypes = {
  side: PropTypes.string.isRequired
};
export default Piece;
