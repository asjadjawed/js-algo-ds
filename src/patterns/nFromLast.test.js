const fromLast = require("./nFromLast");
const L = require("../datastructures/linkedList/SinglyLinkedList");
const List = L.LinkedList;

test("fromLast is a function", () => {
  expect(typeof fromLast).toEqual("function");
});

test("fromLast returns the node n elements from the end", () => {
  const l = new List();

  l.insertLast("a");
  l.insertLast("b");
  l.insertLast("c");
  l.insertLast("d");
  l.insertLast("e");

  expect(fromLast(l, 3).data).toEqual("b");
});
