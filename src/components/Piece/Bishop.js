import Piece from "./index";
import { PIECES, PIECES_MOVEMENTS } from "../constants";

class Bishop extends Piece {
  name = () => {
    return PIECES.bishop;
  };

  imageLink = () => {
    return 'https://orangain.github.io/shogi-piece-images/dist/0KA.svg';
  };

  imagePromoted = () => {
    return 'https://orangain.github.io/shogi-piece-images/dist/0UM.svg';
  };
}

export default Bishop;
