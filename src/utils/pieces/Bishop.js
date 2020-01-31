const Bishop = (isPromoted) => {
  if (!isPromoted) {
    return 'https://orangain.github.io/shogi-piece-images/dist/0KA.svg';
  }
  return 'https://orangain.github.io/shogi-piece-images/dist/0UM.svg';
};

export default Bishop;
