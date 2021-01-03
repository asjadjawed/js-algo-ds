class Node {
  constructor(data) {
    this.data = data;
    this.children = [];
  }

  add(data) {
    this.children.push(new Node(data));
  }

  remove(data) {
    this.children = this.children.filter((n) => n.data !== data);
  }
}

class Tree {
  constructor() {
    this.root = null;
  }

  traverseBF(f) {
    let q = [this.root];

    while (q.length !== 0) {
      const current = q.shift();
      f(current);
      q = [...q, ...current.children];
    }
  }

  traverseDF(f) {
    let q = [this.root];

    while (q.length !== 0) {
      const current = q.shift();
      f(current);
      q = [...current.children, ...q];
    }
  }
}

module.exports = { Node, Tree };
