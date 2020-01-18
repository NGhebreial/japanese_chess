import PropTypes from 'react-proptypes';
import React from "react";
import { Col } from 'react-bootstrap';
import "./styles.css";

const Square = ({piece, onClick}) => {
  const className = piece.isHighlight? "highlight square": "square";
  return(
    <Col className={className}
      onClick={() => {
      onClick(piece);
    }}>
      {piece.component}
    </Col>
  );
};

Square.propTypes = {
  piece: PropTypes.object,
  onClick: PropTypes.func.isRequired
};

Square.defaultProps = {
  piece: {}
};

export default Square;
