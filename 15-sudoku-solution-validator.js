const inputData = [
  [
    [5, 3, 4, 6, 7, 8, 9, 1, 2],
    [6, 7, 2, 1, 9, 5, 3, 4, 8],
    [1, 9, 8, 3, 4, 2, 5, 6, 7],
    [8, 5, 9, 7, 6, 1, 4, 2, 3],
    [4, 2, 6, 8, 5, 3, 7, 9, 1],
    [7, 1, 3, 9, 2, 4, 8, 5, 6],
    [9, 6, 1, 5, 3, 7, 2, 8, 4],
    [2, 8, 7, 4, 1, 9, 6, 3, 5],
    [3, 4, 5, 2, 8, 6, 1, 7, 9],
  ],
  [
    [5, 3, 4, 6, 7, 8, 9, 1, 2],
    [6, 7, 2, 1, 9, 0, 3, 4, 8],
    [1, 0, 0, 3, 4, 2, 5, 6, 0],
    [8, 5, 9, 7, 6, 1, 0, 2, 0],
    [4, 2, 6, 8, 5, 3, 7, 9, 1],
    [7, 1, 3, 9, 2, 4, 8, 5, 6],
    [9, 0, 1, 5, 3, 7, 2, 1, 4],
    [2, 8, 7, 4, 1, 9, 6, 3, 5],
    [3, 0, 0, 4, 8, 1, 1, 7, 9],
  ],
  [
    [1, 2, 3, 4, 5, 6, 7, 8, 9],
    [1, 2, 3, 4, 5, 6, 7, 8, 9],
    [1, 2, 3, 4, 5, 6, 7, 8, 9],
    [1, 2, 3, 4, 5, 6, 7, 8, 9],
    [1, 2, 3, 4, 5, 6, 7, 8, 9],
    [1, 2, 3, 4, 5, 6, 7, 8, 9],
    [1, 2, 3, 4, 5, 6, 7, 8, 9],
    [1, 2, 3, 4, 5, 6, 7, 8, 9],
    [1, 2, 3, 4, 5, 6, 7, 8, 9],
  ]
];


const validSolution = (board) =>
  validLines(board) && validCols(board) && validNodes(board);

const validLines = (board) => {
  let valid = true;
  let matched;
  let matchedLines = 0;
  board.forEach((line) => {
    matched = 0;

    for (let i = 1; i <= 9; i++) {
      const found = line.find(el => el == i);
      if(found) matched++;
    }

    if (matched == 9) matchedLines++;
  });
  return matchedLines == 9 ? true : false;
};

const validCols = (board) => {
  // Transpose && use validLines()
  const boardT = [];

  for (let col = 0; col < 9; col++) {
    const colT = [];

    for (let line = 0; line < 9; line++) {
      colT.push(board[line][col]);
    }

    boardT.push(colT);
  }

  return validLines(boardT);
};

const validNodes = (board) => {
  // Convert nodes to lines && use validLines()
  const convertedBoard = [];

  for (let nodeX = 1; nodeX < 9; nodeX += 3) {
    for (let nodeY = 1; nodeY < 9; nodeY += 3) {
      const line = [];

      for (let x = nodeX - 1; x <= nodeX + 1; x++) {
        for (let y = nodeY - 1; y <= nodeY + 1; y++) {
          line.push(board[x][y]);
        }
      }

      convertedBoard.push(line);
    }
  }

  return validLines(convertedBoard);
};

inputData.forEach((input) => console.log(validSolution(input)));
