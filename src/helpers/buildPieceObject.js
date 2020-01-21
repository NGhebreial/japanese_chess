function buildPieceObject(piece, side, isPromoted, col_index, row_index, isEmpty) {
  return {
    'piece': piece,
    'side': side,
    'isPromoted': isPromoted,
    'isHighlight': false,
    'position': [col_index, row_index],
    'isEmpty': isEmpty,
  };
}

export default buildPieceObject;
