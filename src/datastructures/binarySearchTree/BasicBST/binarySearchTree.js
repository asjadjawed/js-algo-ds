class Node {
  constructor(data) {
    this.data = data;
    this.left = null;
    this.right = null;
  }

  insert(data) {
    const insertNode = new Node(data);

    if (this.left === null && insertNode.data < this.data)
      this.left = insertNode;
    else if (this.right === null && insertNode.data > this.data)
      this.right = insertNode;
    else if (insertNode.data < this.data) this.left.insert(data);
    else this.right.insert(data);
  }

  contains(data) {
    if (this.data === data) return this;
    else if (data < this.data && this.left === null) return null;
    else if (data > this.data && this.right === null) return null;
    else if (data > this.data) return this.right.contains(data);
    else return this.left.contains(data);
  }
}

module.exports = Node;
