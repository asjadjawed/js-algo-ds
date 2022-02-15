class Graph {
  constructor() {
    this.adjacencyList = {};
  }

  _hasVertex(v) {
    return v in this.adjacencyList;
  }

  addVertex(v) {
    if (v in this.adjacencyList) throw new Error('Vertex exists in list!');
    else this.adjacencyList[v] = []; // think of implementing this with a set
  }

  addEdge(v1, v2) {
    if (!(this._hasVertex(v1) && this._hasVertex(v2)))
      throw new Error('Invalid vertices');
    this.adjacencyList[v1].push(v2);
    this.adjacencyList[v2].push(v1);
  }

  removeEdge(v1, v2) {
    if (!(this._hasVertex(v1) && this._hasVertex(v2)))
      throw new Error('Invalid vertices');

    this.adjacencyList[v1] = this.adjacencyList[v1].filter((v) => v != v2);
    this.adjacencyList[v2] = this.adjacencyList[v2].filter((v) => v != v1);
  }

  removeVertex(v) {
    if (!this._hasVertex(v)) throw new Error('Invalid vertex');

    for (const i of this.adjacencyList[v]) this.removeEdge(v, i);
    delete this.adjacencyList[v];
  }

  dfsRecursive(v) {
    const result = [];
    const visited = new Set();

    const visit = (x) => {
      if (this.adjacencyList[x].length === 0) return;
      result.push(x);
      visited.add(x);
      for (const c of this.adjacencyList[x]) if (!visited.has(c)) visit(c);
    };

    visit(v);
    return result;
  }

  dfsIterative(v) {
    const result = [];
    const visited = new Set();

    let current = v;
    let stack = [current];

    while (stack.length) {
      if (visited.has(current)) {
        stack.shift();
        current = stack[0];
        continue;
      } else {
        visited.add(current);
        result.push(current);
        stack = [...this.adjacencyList[current], ...stack];

        current = stack[0];
      }
    }

    return result;
  }

  bfs(v) {
    const result = [];
    const visited = new Set();

    let q = [v];

    while (q.length) {
      const current = q.shift();

      if (visited.has(current)) continue;
      else {
        result.push(current);
        visited.add(current);
        q = [...q, ...this.adjacencyList[current]];
      }
    }

    return result;
  }
}

module.exports = Graph;
