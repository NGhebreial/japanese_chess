import { TURNS } from '../../components/constants';

const King = (side) => {
  if (side === TURNS.white) {
    return 'https://orangain.github.io/shogi-piece-images/dist/0OU.svg';
  }
  return 'https://orangain.github.io/shogi-piece-images/dist/0GY.svg';
};

export default King;
