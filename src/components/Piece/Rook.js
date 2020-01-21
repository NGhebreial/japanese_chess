import Piece from "./index";
import { PIECES, PIECES_MOVEMENTS } from "../constants";

class Rook extends Piece {
  name = () => {
    return PIECES.rook;
  };

  imageLink = () => {
    return 'https://orangain.github.io/shogi-piece-images/dist/0HI.svg';
  };

  imagePromoted = () => {
    return 'https://orangain.github.io/shogi-piece-images/dist/0RY.svg';
  };

  isPromotable = () => {
    return true;
  };

  attackCoords = () => {
    return PIECES_MOVEMENTS.rook;
  };

  promotedAttackCoords = () => {
    // Add the diagonals
    const coords = PIECES_MOVEMENTS.rook;
    //Front left
    coords.push([-1, 1]);
    //Front right
    coords.push([1, 1]);
    //Back left
    coords.push([-1, -1]);
    //Back right
    coords.push([1, -1]);
    return coords;
  }
}

export default Rook;
