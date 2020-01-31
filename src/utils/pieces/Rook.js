const Rook = (isPromoted) => {
  if (!isPromoted) {
    return 'https://orangain.github.io/shogi-piece-images/dist/0HI.svg';
  }
  return 'https://orangain.github.io/shogi-piece-images/dist/0RY.svg';
};

export default Rook;
