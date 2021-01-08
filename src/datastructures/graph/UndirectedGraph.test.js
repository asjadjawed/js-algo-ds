const Graph = require("./UndirectedGraph");

describe("Adding a vertex and edge", () => {
  let g;

  beforeEach(() => {
    g = new Graph();
  });

  test("adding a new vertex", () => {
    g.addVertex("c");

    expect("c" in g.adjacencyList).toBe(true);
    expect(g.adjacencyList["c"]).toEqual([]);

    expect(() => g.addVertex("c")).toThrow();
  });

  test("adding an edge", () => {
    g.addVertex("a");
    g.addVertex("b");

    expect(() => g.addEdge("a", "c")).toThrow();
    expect(() => g.addEdge("c", "a")).toThrow();

    g.addEdge("a", "b");
    expect(g.adjacencyList["a"][0]).toBe("b");
    expect(g.adjacencyList["b"][0]).toBe("a");
  });

  test("removing an edge", () => {
    g.addVertex("a");
    g.addVertex("b");
    g.addVertex("c");
    g.addEdge("a", "b");
    g.addEdge("a", "c");
    expect(g.adjacencyList["a"][0]).toBe("b");
    expect(g.adjacencyList["b"][0]).toBe("a");
    expect(g.adjacencyList["a"][1]).toBe("c");
    expect(g.adjacencyList["c"][0]).toBe("a");

    g.removeEdge("b", "a");
    expect(g.adjacencyList["a"]).toEqual(["c"]);
    expect(g.adjacencyList["c"]).toEqual(["a"]);
    expect(g.adjacencyList["b"]).toEqual([]);

    expect(() => g.removeEdge("bc", "a")).toThrow();
    expect(() => g.removeEdge("a", "d")).toThrow();
  });

  test("remove vertex", () => {
    g.addVertex("a");
    g.addVertex("b");
    g.addVertex("c");
    g.addEdge("a", "b");
    g.addEdge("a", "c");
    g.addEdge("b", "c");
    expect(g.adjacencyList["a"].includes("c")).toBe(true);
    expect(g.adjacencyList["b"].includes("c")).toBe(true);

    g.removeVertex("c");
    expect(g._hasVertex("c")).toBe(false);
    expect(g.adjacencyList["a"].includes("c")).toBe(false);
    expect(g.adjacencyList["a"].includes("b")).toBe(true);
    expect(g.adjacencyList["b"].includes("c")).toBe(false);
    expect(g.adjacencyList["b"].includes("a")).toBe(true);
  });
});
