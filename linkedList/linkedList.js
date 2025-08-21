export const linkedList = function () {
  let head = null;
  return {
    append(value) {
      const newNode = node(value);
      if (head === null) {
        head = newNode;
        return newNode;
      }

      let pointer = head;

      while (pointer.nextNode !== null) {
        pointer = pointer.nextNode;
      }
      pointer.nextNode = newNode;
      return newNode;
    },

    prepend(value) {
      const newNode = node(value);
      if (head === null) {
        head = newNode;
        return newNode;
      }

      let pointer = head;
      head = newNode;
      head.nextNode = pointer;
      return newNode;
    },
    size() {
      let size = 0;
      let pointer = head;
      while (pointer !== null) {
        pointer = pointer.nextNode;
        size++;
      }
      return size;
    },
    head() {
      return head.value;
    },
    tail() {
      if (head === null) {
        return null;
      }
      let pointer = head;
      while (pointer.nextNode !== null) {
        pointer = pointer.nextNode;
      }
      return pointer.value;
    },
    at(index) {
      if (index === 0) {
        return head;
      }
      let pointer = head;
      let count = 0;
      while (count < index) {
        pointer = pointer.nextNode;
        count++;
      }
      return pointer;
    },
    pop() {
      if (head === null) return null;

      if (head.nextNode === null) {
        head = null;
      }
      let pointer = head;
      let previousNode = null;
      while (pointer.nextNode !== null) {
        previousNode = pointer;
        pointer = pointer.nextNode;
      }
      previousNode.nextNode = null;
    },
    contains(value) {},
    find(value) {},
    toString() {},
    insertAt(value, index) {},
    removeAt(index) {},
    print() {
      return head;
    },
  };
};

const node = function (value, nextNode = null) {
  return {
    value,
    nextNode,
  };
};
