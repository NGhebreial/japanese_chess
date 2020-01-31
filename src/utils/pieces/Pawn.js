const Pawn = (isPromoted) => {
  if (!isPromoted) {
    return 'https://orangain.github.io/shogi-piece-images/dist/0FU.svg';
  }
  return 'https://orangain.github.io/shogi-piece-images/dist/0TO.svg';
};

export default Pawn;
