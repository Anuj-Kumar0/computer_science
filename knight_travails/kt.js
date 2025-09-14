let square = [3, 3];

const possibleMoves = [
  [+2, +1],
  [+2, -1],
  [-2, +1],
  [-2, -1],
  [+1, +2],
  [+1, -2],
  [-1, +2],
  [-1, -2],
];

function getMoves(square) {
  let movesArr = [];
  for (let i = 0; i < possibleMoves.length; i++) {
    let [x, y] = possibleMoves[i];
    let [sx, sy] = square;

    let newX = x + sx;
    let newY = y + sy;

    movesArr.push([newX, newY]);
  }
  console.log(movesArr);

  let valid = [];
  for (let i = 0; i < movesArr.length; i++) {
    let [x, y] = movesArr[i];
    if (x >= 0 && x <= 7 && y >= 0 && y <= 7) {
      valid.push([x, y]);
    }
  }
  return valid;
}

const moves = getMoves(square);
console.log(moves);
