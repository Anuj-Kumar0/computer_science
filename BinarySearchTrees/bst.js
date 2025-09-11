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

// A utility function to insert a new
// node with the given key
function insert(root, key) {
  if (root === null) return new node(key);

  // Duplicates not allowed
  if (root.data === key) return root;

  if (key < root.data) root.left = insert(root.left, key);
  else if (key > root.data) root.right = insert(root.right, key);

  return root;
}

// Creating the following BST
//      50
//     /  \
//    30   70
//   / \   / \
//  20 40 60 80

let root = new node(50);
root = insert(root, 30);
root = insert(root, 20);
root = insert(root, 40);
root = insert(root, 70);
root = insert(root, 60);
root = insert(root, 80);

// This function deletes a given key x from the
// given BST and returns the modified root of the
// BST (if it is modified).
function delNode(root, x) {
  if (root === null) return root;

  if (x < root.data) {
    root.left = delNode(root.left, x);
  } else if (x > root.data) {
    root.right = delNode(root.right, x);
  } else {
    // found the node to delete

    // case 1: no left child
    if (root.left === null) return root.right;

    // case 2: no right child
    if (root.right === null) return root.left;

    // case 3: two children
    let succ = getSuccessor(root.right);
    root.data = succ.data;
    root.right = delNode(root.right, succ.data);
  }
  return root;
}

// find the smallest value in a subtree (successor)
function getSuccessor(node) {
  let curr = node;
  while (curr.left !== null) {
    curr = curr.left;
  }
  return curr;
}

console.log("Tree built with insert:");
prettyPrint(root);

console.log("\nTree before deletion:");
prettyPrint(root);

root = delNode(root, 70);

console.log("\nTree after deletion:");
prettyPrint(root);

function find(root, value) {
  if (root === null) {
    console.log("Value not found in tree!");
    return null;
  }

  if (root.data === value) {
    console.log("Value found in tree.");
    return root;
  }

  if (root.data < value) {
    return find(root.right, value);
  }

  if (root.data > value) {
    return find(root.left, value);
  }
}
find(root, 1270);

function levelOrderForEach(root, callback) {
  if (!callback) {
    throw new Error("Callback is not provided");
  }

  if (root === null) return;

  let queue = [];

  queue.push(root);
  while (queue.length > 0) {
    let current = queue.shift();

    callback(current);

    if (current.left !== null) {
      queue.push(current.left);
    }

    if (current.right !== null) {
      queue.push(current.right);
    }
  }
}

levelOrderForEach(root, (node) => {
  console.log(node.data);
});

function preOrderForEach(root, callback) {
  if (root === null) return;

  if (!callback) {
    throw new Error("Callback is not provided");
  }

  callback(root);

  preOrderForEach(root.left, callback);
  preOrderForEach(root.right, callback);
}

preOrderForEach(root, (node) => {
  console.log(node.data);
});

function inOrderForEach(root, callback) {
  if (root === null) return;

  if (!callback) {
    throw new Error("Callback is not provided");
  }

  inOrderForEach(root.left, callback);
  callback(root);
  inOrderForEach(root.right, callback);
}

inOrderForEach(root, (node) => {
  console.log(node.data);
});

function postOrderForEach(root, callback) {
  if (root === null) return;

  if (!callback) {
    throw new Error("Callback is not provided");
  }

  postOrderForEach(root.left, callback);
  postOrderForEach(root.right, callback);
  callback(root);
}

postOrderForEach(root, (node) => {
  console.log(node.data);
});

function height(root, value) {
  let node = find(root, value);
  if (!node) return null;

  function getHeight(nod, count) {
    if (nod === null) return count - 1;
    let maxHeight = Math.max(
      getHeight(nod.left, count + 1),
      getHeight(nod.right, count + 1)
    );
    return maxHeight;
  }

  return getHeight(node, 0);
}

let height1 = height(root, 990);
console.log(height1);

function depth(root, value) {
  let depthCount = 0;
  let current = root;

  while (current !== null) {
    if (value === current.data) {
      return depthCount;
    } else if (value < current.data) {
      current = current.left;
    } else if (value > current.data) {
      current = current.right;
    }

    depthCount++;
  }
  return null;
}

let depth1 = depth(root, 0);
console.log(depth1);

function isBalanced(root) {
  if (root === null) return true;

  heightLeft = height(root.left);
  heightRight = height(root.right);

  if (Math.abs(heightLeft - heightRight) > 1) return false;
  else {
    return isBalanced(root.left) && isBalanced(root.right);
  }
}

let checkBalance = isBalanced(root);
console.log(checkBalance);

function reBalance(root) {
  let sortedArray = [];
  function inOrder(root) {
    if (root === null) return;

    inOrder(root.left);
    sortedArray.push(root.data);
    inOrder(root.right);
  }
  inOrder(root);
  return tree(sortedArray);
}

let reBalanceTree = reBalance(root);
prettyPrint(reBalanceTree.root);
