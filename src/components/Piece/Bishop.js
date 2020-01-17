import Piece from "./index";
import {PIECES_MOVEMENTS} from "../constants";

class Bishop extends Piece{
    name = () => {
        return 'Bishop';
    };

    imageLink = () => {
        return 'https://orangain.github.io/shogi-piece-images/dist/0KA.svg';
    };

    imagePromoted = () => {
        return 'https://orangain.github.io/shogi-piece-images/dist/0UM.svg';
    };

    isPromotable = () => {
        return true;
    };

    attackCoords = () => {
        return PIECES_MOVEMENTS.bishop;
    };

    promotedAttackCoords = () => {
        // Add the sides
        const coords = PIECES_MOVEMENTS.bishop;
        //Front middle
        coords.push([0, 1]);
        //Back middle
        coords.push([0, -1]);
        //Left
        coords.push([-1, 0]);
        //Right
        coords.push([1, 0]);
        return coords;
    }
}
export default Bishop;
