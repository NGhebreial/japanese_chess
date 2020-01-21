import Piece from "./index";
import { PIECES, PIECES_MOVEMENTS } from "../constants";

class Pawn extends Piece {
  name = () => {
    return PIECES.pawn;
  };

  imageLink = () => {
    return 'https://orangain.github.io/shogi-piece-images/dist/0FU.svg';
  };

  imagePromoted = () => {
    return 'https://orangain.github.io/shogi-piece-images/dist/0TO.svg';
  };
}

export default Pawn;
