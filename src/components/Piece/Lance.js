import Piece from "./index";
import { PIECES, PIECES_MOVEMENTS } from "../constants";

class Lance extends Piece {
  name = () => {
    return PIECES.lance;
  };

  imageLink = () => {
    return 'https://orangain.github.io/shogi-piece-images/dist/0KY.svg';
  };

  imagePromoted = () => {
    return 'https://orangain.github.io/shogi-piece-images/dist/0NY.svg';
  };

  isPromotable = () => {
    return true;
  };

  attackCoords = () => {
    return PIECES_MOVEMENTS.lance;
  };

  promotedAttackCoords = () => {
    return PIECES_MOVEMENTS.golden;
  }
}

export default Lance;
