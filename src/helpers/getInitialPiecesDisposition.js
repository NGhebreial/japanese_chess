import { COLS, INITIAL_COORDS, ROWS, TURNS } from '../components/constants';
import Blank from '../components/Blank/Blank';
import React from 'react';
import getComponentByPiece from './getComponentByPiece';
import buildPieceObject from './buildPieceObject';

const getInitialPiecesDisposition = () => {
  let pieces = {};
  // Filling the object with empty components
  COLS.forEach((col, col_index) => {
    pieces[col_index] = [];
    ROWS.forEach((row, row_index) => {
      pieces[col_index].push(buildPieceObject("", "", false, col_index, row_index, true));
    });
  });
  // Generating the components for every piece based on the initial distribution on the board
  for (const turn in TURNS) {
    Object.keys(INITIAL_COORDS[turn]).forEach((key) => {
      INITIAL_COORDS[turn][key].forEach((piece_i) => {
        pieces[piece_i[0]][piece_i[1]] = buildPieceObject(
          key, turn, false, piece_i[0], piece_i[1], false);
      })
    });
  }
  return pieces;
};

export default getInitialPiecesDisposition;
