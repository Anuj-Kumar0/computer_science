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
