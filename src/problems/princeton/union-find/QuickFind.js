class QuickFind {
  constructor(n) {
    this.id = [];

    for (let i = 0; i < n; i++) {
      this.id[i] = i;
    }
  }

  connected(node1, node2) {
    return this.id[node1] === this.id[node2];
  }

  union(node1, node2) {
    const node1Group = this.id[node1];
    const node2Group = this.id[node2];

    for (let i = 0; i < this.id.length; i++) {
      if (this.id[i] === node1Group) {
        console.log(this.id[i]);
        this.id[i] = node2Group;
      }
    }
  }
}

module.exports = {
  QuickFind,
};
