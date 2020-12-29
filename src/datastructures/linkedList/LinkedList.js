class Node {
  constructor(data, next = null) {
    this.data = data;
    this.next = next;
  }
}

class LinkedList {
  constructor() {
    this.head = null;
  }

  insertFirst(data) {
    const newNode = new Node(data, this.head);
    this.head = newNode;
  }

  size() {
    let current = this.head;
    let count = 0;
    while (current) {
      count++;
      current = current.next;
    }
    return count;
  }

  getFirst() {
    return this.head;
  }

  getLast() {
    let current = this.head;
    if (!current) return current;
    while (current.next) current = current.next;
    return current;
  }

  clear() {
    this.head = null;
  }

  removeFirst() {
    if (this.head) this.head = this.head.next;
    return;
  }

  removeLast() {
    let current = this.head;
    if (!this.head) return;
    if (!this.head.next) {
      this.head = null;
      return;
    }
    while (current.next.next) current = current.next;
    current.next = null;
  }

  insertLast(data) {
    const newNode = new Node(data);
    const lastNode = this.getLast();
    if (lastNode) lastNode.next = newNode;
    else this.head = newNode;
  }

  getAt(index) {
    let current = this.head;
    while (index) {
      if (index === 0) return current;
      if (!current || !current.next) return null;
      index--;
      current = current.next;
    }
    return current;
  }

  removeAt(index) {
    if (!this.head) return;
    if (index === 0) this.head = this.head.next;
    else {
      const parentRemove = this.getAt(index - 1);
      if (!parentRemove || !parentRemove.next) return;
      parentRemove.next = parentRemove.next.next;
    }
  }

  insertAt(data, index = 0) {
    if (!this.head || index === 0) {
      this.insertFirst(data);
      return;
    }

    const parentNode = this.getAt(index - 1);
    if (!parentNode || !parentNode.next) {
      this.insertLast(data);
      return;
    }

    const newNode = new Node(data);
    newNode.next = parentNode.next;
    parentNode.next = newNode;
  }

  forEach(f) {
    let current = this.head;

    while (current) {
      f(current);
      current = current.next;
    }
  }

  *[Symbol.iterator]() {
    let node = this.head;

    while (node) {
      yield node;
      node = node.next;
    }
  }
}

module.exports = { Node, LinkedList };
