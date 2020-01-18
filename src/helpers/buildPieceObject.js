import Blank from '../components/Blank/Blank';
import React from 'react';

function buildPieceObject(component, col_index, row_index, ref, isEmpty) {
  return {
    'component': component,
    'isHighlight': false,
    'position': [col_index, row_index],
    'ref': ref,
    'isEmpty': isEmpty,
  };
}
export default buildPieceObject;
