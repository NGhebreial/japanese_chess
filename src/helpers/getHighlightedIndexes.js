import { COLS, ROWS, TURNS } from '../components/constants';

const getHighlightedIndexes = (pieces, piece) => {
  const indexes = [];
  // If we click in a piece
  if( !piece.isEmpty ){
    const actualPosition = piece.position;
    const objectRef = piece.ref.current;
    //TODO: Check if its promoted to retrieve the proper coords
    const movements = objectRef.attackCoords();
    for( let i = 0; i< movements.length; i++ ){
      const movement = movements[i];
      //Add if they are white, subtract if they are black
      const x = objectRef.props.side === TURNS.white? actualPosition[1] + movement[0]:
        actualPosition[1] - movement[0];
      const y = objectRef.props.side === TURNS.white? actualPosition[0] + movement[1]:
        actualPosition[0] - movement[1];
      //If it's in range
      if( x >= 0 && x < ROWS.length && y>=0 && y < COLS.length ){
        // Check if the position is a legal movement
        const position = pieces[y][x];
        if( position.isEmpty || position.ref.current.props.side !== objectRef.props.side){
          indexes.push([y, x]);
        }
        else{
          break;
        }
      }
    }

  }

  return indexes;
};

export default getHighlightedIndexes;
