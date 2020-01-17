import PropTypes from 'react-proptypes';
import React from "react";
import { Col } from 'react-bootstrap';
import "./styles.css";

const Square = ({piece, onClick}) => {
  return(
    <Col className="square"
      onClick={() => {
      onClick(piece);
    }}>
      {piece}
    </Col>
  );
};

Square.propTypes = {
  piece: PropTypes.object,
};

Square.defaultProps = {
  piece: {}
};

export default Square;
