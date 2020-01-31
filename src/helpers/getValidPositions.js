import {
  COLS,
  PIECES_MOVEMENTS,
  PIECES_PROMOTED_MOVEMENTS,
  ROWS,
  TURNS,
} from '../components/constants';

function isBlocked(x, y, piece, blockIndex) {
  const currentPosition = piece.position;
  const yDirection = Math.abs(y - currentPosition[0]);
  const xDirection = Math.abs(x - currentPosition[1]);
  let blocked = false;
  // Diagonal
  if (xDirection >= 1 && yDirection >= 1) {
    blocked = blockIndex.some((block) => ((block[0] === y + 1 || block[0] === y - 1) && (block[1] === x + 1 || block[1] === x - 1)));
  }
  // Front or back
  else if (xDirection === 0) {
    blocked = blockIndex.some((block) => ((block[0] === y + 1 || block[0] === y - 1) && block[1] === x));
  }
  // Left or right
  else if (yDirection === 0) {
    blocked = blockIndex.some((block) => ((block[1] === x + 1 || block[1] === x - 1) && block[0] === y));
  }
  return blocked;
}

const getValidPositions = (pieces, piece) => {
  const finalPositions = [];
  const blockIndex = [];
  const currentPosition = piece.position;
  const pieceSide = piece.side;
  let isNotValidMovement = false;

  const movements = piece.isPromoted ? PIECES_PROMOTED_MOVEMENTS[piece.piece]
    : PIECES_MOVEMENTS[piece.piece];

  movements.forEach((movement) => {
    // Add if they are white, subtract if they are black
    const x = pieceSide === TURNS.white ? currentPosition[1] + movement[0]
      : currentPosition[1] - movement[0];
    const y = pieceSide === TURNS.white ? currentPosition[0] + movement[1]
      : currentPosition[0] - movement[1];
    // If it's in range
    if (x >= 0 && x < ROWS.length && y >= 0 && y < COLS.length) {
      isNotValidMovement = isBlocked(x, y, piece, blockIndex);
      const position = pieces[y][x];
      if (isNotValidMovement) {
        blockIndex.push([y, x]);
      } else if (position.isEmpty) {
        finalPositions.push([y, x]);
      } else if (position.side !== pieceSide) {
        finalPositions.push([y, x]);
        blockIndex.push([y, x]);
      } else {
        blockIndex.push([y, x]);
      }
    }
  });
  return finalPositions;
};

export default getValidPositions;
