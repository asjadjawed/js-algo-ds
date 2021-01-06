class MaxBH {
  constructor() {
    this.data = [];
  }

  _swap(p, i) {
    [this.data[p], this.data[i]] = [this.data[i], this.data[p]];
  }

  insert(value) {
    const getParentIndex = (i) => Math.floor((i - 1) / 2);

    let insertPoint = this.data.length;
    this.data.push(value);

    while (insertPoint > 0) {
      const parentIndex = getParentIndex(insertPoint);
      if (this.data[parentIndex] > value) break;
      else {
        this._swap(parentIndex, insertPoint);
        insertPoint = parentIndex;
      }
    }
  }

  remove() {
    this._swap(0, this.data.length - 1);
    const returnValue = this.data.pop();

    const getMaxChild = (i) => {
      const c1 = 2 * i + 1;
      const c2 = 2 * i + 2;

      if (c1 >= this.data.length) return null;
      if (c2 >= this.data.length && this.data[c1] > this.data[i]) return c1;
      if (c2 >= this.data.length && this.data[c1] < this.data[i]) return null;

      const greatestChild = this.data[c1] > this.data[c2] ? c1 : c2;

      return this.data[greatestChild] > this.data[i] ? greatestChild : null;
    };

    let currentIndex = 0;

    while (getMaxChild(currentIndex)) {
      const swapChildIndex = getMaxChild(currentIndex);
      this._swap(currentIndex, swapChildIndex);
      currentIndex = swapChildIndex;
    }

    return returnValue;
  }
}

module.exports = MaxBH;
