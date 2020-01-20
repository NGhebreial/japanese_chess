import Piece from "./index";
import { PIECES_MOVEMENTS } from "../constants";

class Silver extends Piece {
  name = () => {
    return 'Silver';
  };

  imageLink = () => {
    return 'https://orangain.github.io/shogi-piece-images/dist/0GI.svg';
  };

  imagePromoted = () => {
    return 'https://orangain.github.io/shogi-piece-images/dist/0NG.svg';
  };

  isPromotable = () => {
    return true;
  };

  attackCoords = () => {
    return PIECES_MOVEMENTS.silver;
  };

  promotedAttackCoords = () => {
    return PIECES_MOVEMENTS.golden;
  }
}

export default Silver;
