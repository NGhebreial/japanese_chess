import PropTypes from 'react-proptypes';
import React from "react";
import { Col } from 'react-bootstrap';
import "./styles.css";
import getPieceComponent from '../../helpers/getComponentByPiece';

const Square = ({ piece, onClick }) => {
  const className = piece.isHighlight ? "highlight square" : "square";
  return (
    <Col className={className}
         onClick={() => {
           onClick(piece);
         }}>
      {getPieceComponent(piece.piece, piece.side, piece.ref, piece.isPromoted)}
    </Col>
  );
};

Square.propTypes = {
  piece: PropTypes.object.isRequired,
  onClick: PropTypes.func.isRequired
};

export default Square;
