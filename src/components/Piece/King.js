import Piece from "./index";
import { PIECES, PIECES_MOVEMENTS, TURNS } from "../constants";

class King extends Piece {
  name = () => {
    return PIECES.king;
  };

  imageLink = () => {
    const { side } = this.props;
    if (side === TURNS.white) {
      return 'https://orangain.github.io/shogi-piece-images/dist/0OU.svg';
    }
    return 'https://orangain.github.io/shogi-piece-images/dist/0GY.svg';
  };
}

export default King;
