export const linkedList = function () {
  let head = null;
  return {
    append(value) {
      const newNode = node(value);
      if (head === null) {
        head = newNode;
        return;
      }

      let pointer = head;

      while (pointer.nextNode !== null) {
        pointer = pointer.nextNode;
      }
      pointer.nextNode = newNode;
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

const node = function (value, nextNode = null) {
  return {
    value,
    nextNode,
  };
};
