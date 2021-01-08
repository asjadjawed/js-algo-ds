class Graph {
  constructor() {
    this.adjacencyList = {};
  }

  _hasVertex(v) {
    return v in this.adjacencyList;
  }

  addVertex(v) {
    if (v in this.adjacencyList) throw new Error("Vertex exists in list!");
    else this.adjacencyList[v] = []; // think of implementing this with a set
  }

  addEdge(v1, v2) {
    if (!(this._hasVertex(v1) && this._hasVertex(v2)))
      throw new Error("Invalid vertices");
    this.adjacencyList[v1].push(v2);
    this.adjacencyList[v2].push(v1);
  }

  removeEdge(v1, v2) {
    if (!(this._hasVertex(v1) && this._hasVertex(v2)))
      throw new Error("Invalid vertices");

    this.adjacencyList[v1] = this.adjacencyList[v1].filter((v) => v != v2);
    this.adjacencyList[v2] = this.adjacencyList[v2].filter((v) => v != v1);
  }

  removeVertex(v) {
    if (!this._hasVertex(v)) throw new Error("Invalid vertex");

    for (const i of this.adjacencyList[v]) this.removeEdge(v, i);
    delete this.adjacencyList[v];
  }
}

module.exports = Graph;
