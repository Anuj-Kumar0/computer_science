const node = function (data, left = null, right = null) {
  return {
    data,
    left,
    right,
  };
};

const tree = function (array) {
  return {
    root: buildTree(array),
  };
};

function buildTree(array) {
  const sorted = array.sort((a, b) => a - b);
  const uniqueArray = [...new Set(sorted)];

  function sortedArrayToBST(uniqueArray, start, end) {
    if (start > end) {
      return null;
    }

    let mid = Math.floor((start + end) / 2);

    let root = new node(uniqueArray[mid]);

    root.left = sortedArrayToBST(uniqueArray, start, mid - 1);
    root.right = sortedArrayToBST(uniqueArray, mid + 1, end);

    return root;
  }
  return sortedArrayToBST(uniqueArray, 0, uniqueArray.length - 1);
}

const prettyPrint = (node, prefix = "", isLeft = true) => {
  if (node === null) {
    return;
  }
  if (node.right !== null) {
    prettyPrint(node.right, `${prefix}${isLeft ? "│   " : "    "}`, false);
  }
  console.log(`${prefix}${isLeft ? "└── " : "┌── "}${node.data}`);
  if (node.left !== null) {
    prettyPrint(node.left, `${prefix}${isLeft ? "    " : "│   "}`, true);
  }
};

let array = [1, 5, 6, 8, 2, 3, 9, 7, 4, 1, 5, 6, 8];

const root = buildTree(array);
prettyPrint(root);
