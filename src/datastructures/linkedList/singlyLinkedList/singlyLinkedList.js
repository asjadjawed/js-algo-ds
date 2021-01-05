class Node {
  constructor(data, next = null) {
    this.data = data;
    this.next = next;
  }
}

class SinglyLinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
    this.length = 0;
  }

  push(data) {
    const newNode = new Node(data);

    this.length++;

    if (!this.head) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      this.tail.next = newNode;
      this.tail = newNode;
    }

    return this;
  }

  pop() {
    if (this.length === 0) return null;

    let popped;

    if (this.length === 1) {
      popped = this.head;
      this.head = null;
      this.tail = null;
    } else {
      let pointer = this.head;

      while (pointer.next !== this.tail) pointer = pointer.next;

      popped = this.tail;
      this.tail = pointer;
      this.tail.next = null;
    }

    this.length--;

    return popped;
  }

  shift() {
    if (this.length === 0) return null;

    let popped = this.head;

    if (this.length === 1) {
      this.head = null;
      this.tail = null;
    } else {
      this.head = this.head.next;
    }

    this.length--;
    popped.next = null; // cutting reference from rest of list
    return popped;
  }

  unshift(data) {
    const newNode = new Node(data);

    newNode.next = this.head;
    this.head = newNode;

    if (this.length === 0) this.tail = newNode;

    this.length++;

    return this;
  }

  get(index) {
    if (index < 0 || index >= this.length) return null;

    let pointer = this.head;
    for (let i = 0; i < index; i++) {
      pointer = pointer.next;
    }

    return pointer;
  }
}

module.exports = { SinglyLinkedList, Node };
