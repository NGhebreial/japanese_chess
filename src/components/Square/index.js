import PropTypes from 'react-proptypes';
import React from 'react';
import { Col } from 'react-bootstrap';
import './styles.css';
import getPieceSrc from '../../helpers/getComponentByPiece';

const Square = ({ piece, onClick }) => {
  const className = piece.isHighlight ? 'highlight square' : 'square';
  const src = getPieceSrc(piece.piece, piece.side, piece.isPromoted);
  return (
    <Col
      className={className}
      onClick={() => {
        onClick(piece);
      }}
    >
      <div className="piece">
        <img src={src} alt={piece.piece} className={piece.side} />
      </div>
    </Col>
  );
};

Square.propTypes = {
  piece: PropTypes.object.isRequired,
  onClick: PropTypes.func.isRequired,
};

export default Square;
