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
}

export default Rook;
