export const linkedList = function () {
  let head = null;
  return {
    append(value) {
      const newNode = node(value);
      if (head === null) {
        head = newNode;
        return;
      }

      while (head !== null) {
        head = head.nextNode;
      }
      head = newNode;
    },
    print() {
      return head;
    },
    prepend(value) {
      const newNode = node(value);
    },
    size() {},
    head() {},
    tail() {},
    at(index) {},
    pop() {},
    contains(value) {},
    find(value) {},
    toString() {},
    insertAt(value, index) {},
    removeAt(index) {},
  };
};

const node = function (value, nextNode) {
  return {
    value,
    nextNode,
  };
};
