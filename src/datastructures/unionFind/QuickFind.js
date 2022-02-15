class QuickFind {
  constructor(n) {
    this.data = [];

    for (let i = 0; i < n; i++) {
      this.data[i] = i;
    }
  }

  connected(node1, node2) {
    return this.data[node1] === this.data[node2];
  }

  union(node1, node2) {
    const node1GroupId = this.data[node1];
    const node2GroupId = this.data[node2];

    for (let i = 0; i < this.data.length; i++)
      if (this.data[i] === node1GroupId) this.data[i] = node2GroupId;
  }
}

module.exports = {
  QuickFind
};
