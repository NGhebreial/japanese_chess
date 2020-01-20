import { TURNS } from '../components/constants';

const PROMOTED_AREA_WHITE = [6, 7, 8];
const PROMOTED_AREA_BLACK = [2, 1, 0];

const canBePromoted = (piece, previousPosition) => {
  const currentPosition = piece.position;
  return piece.ref.current.isPromotable() && (
    (
      piece.ref.current.props.side === TURNS.white &&
      (PROMOTED_AREA_WHITE.includes(currentPosition[0]) ||
        PROMOTED_AREA_WHITE.includes(previousPosition[0]))
    )
    ||
    (
      piece.ref.current.props.side === TURNS.black &&
      (PROMOTED_AREA_BLACK.includes(currentPosition[0]) ||
        PROMOTED_AREA_BLACK.includes(previousPosition[0]))
    )
  );

};

export default canBePromoted;
