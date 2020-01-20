import Piece from "./index";
import { PIECES, PIECES_MOVEMENTS } from "../constants";

class Golden extends Piece {

  name = () => {
    return PIECES.golden;
  };

  imageLink = () => {
    return 'https://orangain.github.io/shogi-piece-images/dist/0KI.svg';
  };

  isPromotable = () => {
    return false;
  };

  attackCoords = () => {
    return PIECES_MOVEMENTS.golden;
  };
}

export default Golden;
