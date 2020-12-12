class Queue {
  constructor() {
    this.queue = [];
  }

  add(x) {
    this.queue.unshift(x);
  }

  remove() {
    return this.queue.pop();
  }

  peek() {
    return this.queue[this.queue.length - 1];
  }
}

module.exports = Queue;
