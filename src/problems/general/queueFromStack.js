const Stack = require('../../datastructures/stack/Stack');

class Queue {
  constructor() {
    this.queue = new Stack();
    this.tempQueue = new Stack();
  }

  add(x) {
    while (this.queue.peek()) this.tempQueue.add(this.queue.remove());
    this.tempQueue.add(x);
    while (this.tempQueue.peek()) this.queue.add(this.tempQueue.remove());
  }

  remove() {
    return this.queue.remove();
  }

  peek() {
    return this.queue.peek();
  }
}

module.exports = Queue;
