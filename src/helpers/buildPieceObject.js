function buildPieceObject(id, piece, side, isPromoted, colIndex, rowIndex, isEmpty) {
  return {
    id,
    piece,
    side,
    isPromoted,
    isHighlight: false,
    position: [colIndex, rowIndex],
    isEmpty,
  };
}

export default buildPieceObject;
