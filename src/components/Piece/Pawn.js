import Piece from "./index";
import { PIECES_MOVEMENTS } from "../constants";

class Pawn extends Piece {
  name = () => {
    return 'Pawn';
  };

  imageLink = () => {
    return 'https://orangain.github.io/shogi-piece-images/dist/0FU.svg';
  };

  imagePromoted = () => {
    return 'https://orangain.github.io/shogi-piece-images/dist/0TO.svg';
  };

  isPromotable = () => {
    return true;
  };

  attackCoords = () => {
    return PIECES_MOVEMENTS.pawn;
  };

  promotedAttackCoords = () => {
    return PIECES_MOVEMENTS.golden;
  };
}

export default Pawn;
