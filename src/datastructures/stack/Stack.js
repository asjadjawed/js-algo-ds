class Stack {
  constructor() {
    this.stack = [];
  }

  add(x) {
    this.stack.push(x);
  }

  remove() {
    return this.stack.pop();
  }

  peek() {
    return this.stack[this.stack.length - 1];
  }
}

module.exports = Stack;
