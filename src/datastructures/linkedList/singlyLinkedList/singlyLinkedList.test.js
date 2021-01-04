const L = require("./singlyLinkedList");
const List = L.SinglyLinkedList;
const Node = L.Node;

test("List is a class", () => {
  expect(typeof List.prototype.constructor).toEqual("function");
});

test("Node is a class", () => {
  expect(typeof Node.prototype.constructor).toEqual("function");
});

describe("A Node", () => {
  test("has properties 'data' and 'null'", () => {
    const node = new Node("a", "b");
    expect(node.data).toEqual("a");
    expect(node.next).toEqual("b");
  });

  test("has properties 'data' and 'null'", () => {
    const node = new Node("a");
    expect(node.data).toEqual("a");
    expect(node.next).toBeNull();
  });
});

describe("Push a value", () => {
  test("adds to the end of the list", () => {
    const l = new List();
    l.push("a");

    l.push("b");

    expect(l.length).toEqual(2);
    expect(l.tail.data).toEqual("b");
  });
});

describe("Pop a value", () => {
  test("RemoveLast removes the last node when list is empty", () => {
    const l = new List();
    expect(() => {
      l.pop();
    }).not.toThrow();
    expect(l.length).toBe(0);
  });

  test("RemoveLast removes the last node when list is length 1", () => {
    const l = new List();
    l.push("a");
    expect(l.pop().data).toEqual("a");
    expect(l.head).toEqual(null);
    expect(l.length).toBe(0);
  });

  test("RemoveLast removes the last node when list is length 2", () => {
    const l = new List();
    l.push("b");
    l.push("a");

    expect(l.pop().data).toBe("a");

    expect(l.length).toEqual(1);
    expect(l.head.data).toEqual("b");
    expect(l.head.next).toBe(null);
    expect(l.tail.data).toEqual("b");
    expect(l.tail.next).toBe(null);
  });

  test("RemoveLast removes the last node when list is length 3", () => {
    const l = new List();
    l.push("c");
    l.push("b");
    l.push("a");
    expect(l.pop().data).toBe("a");

    expect(l.length).toEqual(2);
    expect(l.tail.data).toEqual("b");
    expect(l.tail.next).toBe(null);
    expect(l.head.data).toEqual("c");
    expect(l.head.next.data).toEqual("b");
  });
});
