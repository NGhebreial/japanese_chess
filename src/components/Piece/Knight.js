import Piece from "./index";
import { PIECES, PIECES_MOVEMENTS } from "../constants";

class Knight extends Piece {
  name = () => {
    return PIECES.knight;
  };

  imageLink = () => {
    return 'https://orangain.github.io/shogi-piece-images/dist/0KE.svg';
  };

  imagePromoted = () => {
    return 'https://orangain.github.io/shogi-piece-images/dist/0NK.svg';
  };

  isPromotable = () => {
    return true;
  };

  attackCoords = () => {
    return PIECES_MOVEMENTS.knight;
  };

  promotedAttackCoords = () => {
    return PIECES_MOVEMENTS.golden;
  }
}

export default Knight;
