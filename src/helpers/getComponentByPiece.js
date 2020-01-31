import { PIECES } from '../components/constants';
import Pawn from '../utils/pieces/Pawn';
import Lance from '../utils/pieces/Lance';
import Knight from '../utils/pieces/Knight';
import Silver from '../utils/pieces/Silver';
import Golden from '../utils/pieces/Golden';
import King from '../utils/pieces/King';
import Rook from '../utils/pieces/Rook';
import Bishop from '../utils/pieces/Bishop';

const getPieceSrc = (piece, side, isPromoted = false) => {
  switch (piece) {
    case PIECES.pawn:
      return Pawn(isPromoted);
    case PIECES.lance:
      return Lance(isPromoted);
    case PIECES.knight:
      return Knight(isPromoted);
    case PIECES.silver:
      return Silver(isPromoted);
    case PIECES.golden:
      return Golden();
    case PIECES.king:
      return King(side);
    case PIECES.rook:
      return Rook(isPromoted);
    case PIECES.bishop:
      return Bishop(isPromoted);
    default:
      return '';
  }
};

export default getPieceSrc;
