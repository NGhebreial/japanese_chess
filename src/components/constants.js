/**
 * Columns
 * */
export const COLS = [1, 2, 3, 4, 5, 6, 7, 8, 9];
/**
 * Rows
 * */
export const ROWS = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i'];

/**
 * Turns
 * */
export const TURNS = {
  white: 'white',
  black: 'black'
};
/**
 * The initial position for every piece on row, col
 * */
export const INITIAL_COORDS = {
  'white': {
    pawn: [],
    lance: [
      [0, 0],
      [0, 8]
    ],
    knight: [
      [0, 1],
      [0, 7]
    ],
    silver: [
      [0, 2],
      [0, 6]
    ],
    golden: [
      [0, 3],
      [0, 5]
    ],
    king: [
      [0, 4]
    ],
    rook: [
      [1, 1]
    ],
    bishop: [
      [1, 7]
    ],
  },
  'black': {
    pawn: [],
    lance: [
      [8, 0],
      [8, 8]
    ],
    knight: [
      [8, 1],
      [8, 7]
    ],
    silver: [
      [8, 2],
      [8, 6]
    ],
    golden: [
      [8, 3],
      [8, 5]
    ],
    king: [
      [8, 4]
    ],
    rook: [
      [7, 1]
    ],
    bishop: [
      [7, 7]
    ],
  },
};
// For white pawn all the 3 row
// For black pawn all the 7 row
for (let i = 0; i < COLS.length; i++) {
  INITIAL_COORDS.white.pawn.push([2, i]);
  INITIAL_COORDS.black.pawn.push([6, i]);
}
/**
 * Possible movements for every piece on [x,y]
 * */
export const PIECES_MOVEMENTS = {
  pawn: [
    [0, 1] //Front middle
  ],
  silver: [
    [0, 1], //Front middle
    [-1, 1],  // Front left
    [1, 1],  // Front right
    [-1, 0],  // Left
    [1, 0],  // Right
    [-1, -1], //Back left
    [1, -1], //Back right
  ],
  golden: [
    [0, 1], //Front middle
    [-1, 1],  // Front left
    [1, 1],  // Front right
    [-1, 0],  // Left
    [1, 0],  // Right
    [0, -1], //Back middle
  ],
  knight: [
    [-1, 2], // L left
    [1, 2], // L right
  ],
  king: [
    [0, 1], //Front middle
    [-1, 1],  // Front left
    [1, 1],  // Front right
    [-1, 0],  // Left
    [1, 0],  // Right
    [0, -1], //Back middle
    [-1, -1], //Back left
    [1, -1], //Back right
  ],
  lance: [],
  bishop: [],
  rook: []
};
// For lance front middle all the row
for (let i = 1; i <= ROWS.length; i++) {
  PIECES_MOVEMENTS.lance.push([0, i]);
}
// For rock fall the sides
for (let i = 1; i <= ROWS.length; i++) {
  // Front
  PIECES_MOVEMENTS.rook.push([0, i]);
  // Back
  PIECES_MOVEMENTS.rook.push([0, -i]);
  // Left
  PIECES_MOVEMENTS.rook.push([-i, 0]);
  // Right
  PIECES_MOVEMENTS.rook.push([i, 0]);
}
// For bishop all the diagonals
for (let i = 1; i <= ROWS.length; i++) {
  // Front right
  PIECES_MOVEMENTS.bishop.push([i, i]);
  // Front left
  PIECES_MOVEMENTS.bishop.push([i, -i]);
  // Back right
  PIECES_MOVEMENTS.bishop.push([-i, i]);
  // Back left
  PIECES_MOVEMENTS.bishop.push([-i, -i]);
}
