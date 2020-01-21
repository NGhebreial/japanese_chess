/**
 * Columns
 * */
export const COLS = [9, 8, 7, 6, 5, 4, 3, 2, 1];
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

export const PIECES = {
  pawn: 'pawn',
  lance: 'lance',
  knight: 'knight',
  silver: 'silver',
  golden: 'golden',
  king: 'king',
  rook: 'rook',
  bishop: 'bishop'
};
/**
 * The initial position for every piece on row, col
 * */
export const INITIAL_COORDS = {
  [TURNS.white]: {
    [PIECES.pawn]: [],
    [PIECES.lance]: [
      [0, 0],
      [0, 8]
    ],
    [PIECES.knight]: [
      [0, 1],
      [0, 7]
    ],
    [PIECES.silver]: [
      [0, 2],
      [0, 6]
    ],
    [PIECES.golden]: [
      [0, 3],
      [0, 5]
    ],
    [PIECES.king]: [
      [0, 4]
    ],
    [PIECES.rook]: [
      [1, 1]
    ],
    [PIECES.bishop]: [
      [1, 7]
    ],
  },
  [TURNS.black]: {
    [PIECES.pawn]: [],
    [PIECES.lance]: [
      [8, 0],
      [8, 8]
    ],
    [PIECES.knight]: [
      [8, 1],
      [8, 7]
    ],
    [PIECES.silver]: [
      [8, 2],
      [8, 6]
    ],
    [PIECES.golden]: [
      [8, 3],
      [8, 5]
    ],
    [PIECES.king]: [
      [8, 4]
    ],
    [PIECES.rook]: [
      [7, 7]
    ],
    [PIECES.bishop]: [
      [7, 1]
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

// For rock fall the sides
// For bishop all the diagonals
// For lance front middle all the row
for (let i = 1; i <= ROWS.length; i++) {
  // Front
  PIECES_MOVEMENTS.rook.push([0, i]);
  // Back
  PIECES_MOVEMENTS.rook.push([0, -i]);
  // Left
  PIECES_MOVEMENTS.rook.push([-i, 0]);
  // Right
  PIECES_MOVEMENTS.rook.push([i, 0]);
  // Front right
  PIECES_MOVEMENTS.bishop.push([i, i]);
  // Front left
  PIECES_MOVEMENTS.bishop.push([i, -i]);
  // Back right
  PIECES_MOVEMENTS.bishop.push([-i, i]);
  // Back left
  PIECES_MOVEMENTS.bishop.push([-i, -i]);

  PIECES_MOVEMENTS.lance.push([0, i]);
}

export const PIECES_PROMOTED_MOVEMENTS = {
  pawn: PIECES_MOVEMENTS.golden,
  silver: PIECES_MOVEMENTS.golden,
  knight: PIECES_MOVEMENTS.golden,
  lance: PIECES_MOVEMENTS.golden,
  bishop: PIECES_MOVEMENTS.bishop,
  rook: PIECES_MOVEMENTS.rook
};
PIECES_PROMOTED_MOVEMENTS.bishop.push( [0, 1], [0, -1], [-1, 0], [1, 0]);
PIECES_PROMOTED_MOVEMENTS.rook.push( [1, 1], [1, -1], [-1, 1], [1, 1]);


