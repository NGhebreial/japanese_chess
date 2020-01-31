const Knight = (isPromoted) => {
  if (!isPromoted) {
    return 'https://orangain.github.io/shogi-piece-images/dist/0KE.svg';
  }
  return 'https://orangain.github.io/shogi-piece-images/dist/0NK.svg';
};

export default Knight;
