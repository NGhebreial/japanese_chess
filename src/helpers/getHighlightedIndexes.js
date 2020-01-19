import { COLS, ROWS, TURNS } from '../components/constants';

const getHighlightedIndexes = (pieces, piece) => {
  const indexes = [];
  let blockIndex = [];
  // If we click in a piece
  if (!piece.isEmpty) {
    const currentPosition = piece.position;
    const objectRef = piece.ref.current;
    const pieceColor = objectRef.props.side;
    let isBlocked = false;
    //TODO: Check if its promoted to retrieve the proper coords
    const movements = objectRef.attackCoords();
    for (let i = 0; i < movements.length; i++) {
      const movement = movements[i];
      //Add if they are white, subtract if they are black
      const x = pieceColor === TURNS.white ? currentPosition[1] + movement[0] :
        currentPosition[1] - movement[0];
      const y = pieceColor === TURNS.white ? currentPosition[0] + movement[1] :
        currentPosition[0] - movement[1];
      //If it's in range
      if (x >= 0 && x < ROWS.length && y >= 0 && y < COLS.length) {
        // Check if the position is a legal movement
        const position = pieces[y][x];
        let yDirection = Math.abs(y - currentPosition[0]);
        let xDirection = Math.abs(x - currentPosition[1]);
        //Diagonal
        if (xDirection >= 1 && yDirection >= 1) {
          isBlocked = blockIndex.some(block => {
            return ((block[0] === y + 1 || block[0] === y - 1) && (block[1] === x + 1 || block[1] === x - 1));
          });
        }
        //Front or back
        else if (xDirection === 0) {
          isBlocked = blockIndex.some(block => {
            return ((block[0] === y + 1 || block[0] === y - 1) && block[1] === x);
          });
        }
        //Left or right
        else if (yDirection === 0) {
          isBlocked = blockIndex.some(block => {
            return ((block[1] === x + 1 || block[1] === x - 1) && block[0] === y);
          });
        }

        if (isBlocked) {
          blockIndex.push([y, x]);
        } else if (position.isEmpty) {
          indexes.push([y, x]);
        } else if (position.ref.current.props.side !== objectRef.props.side) {
          indexes.push([y, x]);
          blockIndex.push([y, x]);
        } else {
          blockIndex.push([y, x]);
        }
      }
    }

  }

  return indexes;
};

export default getHighlightedIndexes;
