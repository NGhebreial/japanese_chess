import Piece from "./index";
import { PIECES, PIECES_MOVEMENTS } from "../constants";

class Silver extends Piece {
  name = () => {
    return PIECES.silver;
  };

  imageLink = () => {
    return 'https://orangain.github.io/shogi-piece-images/dist/0GI.svg';
  };

  imagePromoted = () => {
    return 'https://orangain.github.io/shogi-piece-images/dist/0NG.svg';
  };
}

export default Silver;
