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
}

export default Knight;
