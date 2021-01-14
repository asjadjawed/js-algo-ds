class QuickUnion {
  constructor(n) {
    this.data = [];

    for (let i = 0; i < n; i++) {
      this.data[i] = i;
    }
  }

  getRoot(n) {
    while (n !== this.data[n]) n = this.data[n];
    return n;
  }

  connected(node1, node2) {
    return this.getRoot(node1) === this.getRoot(node2);
  }

  union(node1, node2) {
    const node1GroupId = this.getRoot(node1);
    const node2GroupId = this.getRoot(node2);
    this.data[node1GroupId] = node2GroupId;
  }
}

module.exports = {
  QuickUnion,
};
