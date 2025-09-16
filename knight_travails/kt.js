const createNode = function (square, parentNode = null) {
  return {
    square,
    parentNode,
  };
};

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

  let valid = [];
  for (let i = 0; i < movesArr.length; i++) {
    let [x, y] = movesArr[i];
    if (x >= 0 && x <= 7 && y >= 0 && y <= 7) {
      valid.push([x, y]);
    }
  }
  return valid;
}

function knightMoves(start, target) {
  let startNode = createNode(start);
  let queue = [startNode];
  let visited = new Set([start]);

  while (queue.length > 0) {
    let currentNode = queue.shift();
    let [x, y] = currentNode.square;

    if (x === target[0] && y === target[1]) {
      return currentNode;
    }

    let rightMoves = getMoves(currentNode.square);

    for (let rightMove of rightMoves) {
      if (!visited.has(rightMove)) {
        visited.add(rightMove);

        let childNode = createNode(rightMove, currentNode);
        queue.push(childNode);
      }
    }
  }
}

function createPath(node) {
  let path = [];
  while (node !== null) {
    path.unshift(node.square);
    node = node.parentNode;
  }
  return path;
}

let traversal = knightMoves([0, 0], [4, 4]);
let drawPath = createPath(traversal);
console.log(drawPath);
