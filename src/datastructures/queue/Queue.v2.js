class Node {
  constructor(value) {
    this.value = value;
  }
}

class Queue {
  // implemented using linked list
  constructor() {
    this.head = null;
    this.tail = null;
    this.length = 0;
  }

  // the point to remember is queue removes from one end and adds from another

  enqueue(value) {
    // inserting at end to ensure O(1)
    const insertNode = new Node(value);

    if (!this.head && !this.tail) {
      this.head = insertNode;
      this.tail = insertNode;
    } else {
      this.tail.next = insertNode;
      this.tail = this.tail.next;
    }

    this.length++;
    return this;
  }

  dequeue() {
    // removing from start to ensure to O(1)
    if (this.length === 0) return null;

    const returnValue = this.head.value;

    if (this.length === 1) {
      this.head = null;
      this.tail = null;
    } else {
      this.head = this.head.next;
    }

    this.length--;
    return returnValue;
  }

  peek() {
    return this.head ? this.head.value : null;
  }
}

module.exports = Queue;
