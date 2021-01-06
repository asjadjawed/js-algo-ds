class Node {
  constructor(value, priority) {
    this.value = value;
    this.priority = priority;
  }
}

class PriorityQueue {
  constructor() {
    this.data = [];
  }

  _swap(p, i) {
    [this.data[p], this.data[i]] = [this.data[i], this.data[p]];
  }

  insert(value, priority) {
    const getParentIndex = (i) => Math.floor((i - 1) / 2);

    let insertPoint = this.data.length;
    this.data.push(new Node(value, priority));

    while (insertPoint > 0) {
      const parentIndex = getParentIndex(insertPoint);
      if (this.data[parentIndex].priority < priority) break;
      else {
        this._swap(parentIndex, insertPoint);
        insertPoint = parentIndex;
      }
    }
  }

  remove() {
    this._swap(0, this.data.length - 1);
    const returnValue = this.data.pop();

    const getHighestPriorityChild = (i) => {
      const d = this.data;
      const c1 = 2 * i + 1;
      const c2 = 2 * i + 2;

      if (c1 >= d.length) return null;

      if (c2 >= d.length && d[c1].priority < d[i].priority) return c1;
      if (c2 >= d.length && d[c1].priority > d[i].priority) return null;

      const highestPriorityChild = d[c1].priority < d[c2].priority ? c1 : c2;

      return d[highestPriorityChild].priority < d[i].priority
        ? highestPriorityChild
        : null;
    };

    let currentIndex = 0;

    while (getHighestPriorityChild(currentIndex)) {
      const swapChildIndex = getHighestPriorityChild(currentIndex);
      this._swap(currentIndex, swapChildIndex);
      currentIndex = swapChildIndex;
    }

    return returnValue;
  }
}

module.exports = PriorityQueue;
