import uuid from 'uuid/v4';
import {
  COLS, INITIAL_COORDS, ROWS, TURNS,
} from '../components/constants';
import buildPieceObject from './buildPieceObject';

const getInitialPiecesDisposition = () => {
  const pieces = [];
  // Filling the object with empty components
  COLS.forEach((col, colIndex) => {
    pieces[colIndex] = [];
    ROWS.forEach((row, rowIndex) => {
      pieces[colIndex].push(buildPieceObject(uuid(), '', '', false, colIndex, rowIndex, true));
    });
  });
  // Generating the components for every piece based on the initial distribution on the board
  Object.keys(TURNS).forEach((turn) => {
    Object.keys(INITIAL_COORDS[turn]).forEach((key) => {
      INITIAL_COORDS[turn][key].forEach((pieceIndex) => {
        pieces[pieceIndex[0]][pieceIndex[1]] = buildPieceObject(
          uuid(), key, turn, false, pieceIndex[0], pieceIndex[1], false,
        );
      });
    });
  });
  return pieces;
};

export default getInitialPiecesDisposition;
