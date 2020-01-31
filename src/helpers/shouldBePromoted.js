import { PIECES, TURNS } from '../components/constants';

const PROMOTED_AREA_WHITE = 8;
const PROMOTED_AREA_WHITE_KNIGHT = 7;
const PROMOTED_AREA_BLACK = 0;
const PROMOTED_AREA_BLACK_KNIGHT = 1;

/**
 * Pieces pawn, lance and knight should be promoted if they reach the last
 * row
 * */
const shouldBePromoted = (piece) => {
  const name = piece.piece;
  // Checking lance or pawn
  const willLPBePromoted = (name === PIECES.lance || name === PIECES.pawn)
    && (
      (piece.side === TURNS.white
        && PROMOTED_AREA_WHITE === piece.position[0])
      || (piece.side === TURNS.black
        && PROMOTED_AREA_BLACK === piece.position[0])
    );
  // Checking knight
  const willKBePromoted = (name === PIECES.knight)
    && (
      (piece.side === TURNS.white
        && PROMOTED_AREA_WHITE_KNIGHT === piece.position[0])
      || (piece.side === TURNS.black
        && PROMOTED_AREA_BLACK_KNIGHT === piece.position[0])
    );

  return willLPBePromoted || willKBePromoted;
};

export default shouldBePromoted;
