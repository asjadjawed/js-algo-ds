const Node = require("./binarySearchTree");
const { validate, validate2 } = require("./validateBST");

test("Validate recognizes a valid BST", () => {
  const n = new Node(10);
  n.insert(5);
  n.insert(15);
  n.insert(0);
  n.insert(20);

  expect(validate(n)).toEqual(true);
});

test("Validate recognizes an invalid BST", () => {
  const n = new Node(10);
  n.insert(5);
  n.insert(15);
  n.insert(0);
  n.insert(20);
  n.left.left.right = new Node(999);

  expect(validate(n)).toEqual(false);
});

test("Validate recognizes a valid BST", () => {
  const n = new Node(10);
  n.insert(5);
  n.insert(15);
  n.insert(0);
  n.insert(20);

  expect(validate2(n)).toEqual(true);
});

test("Validate recognizes an invalid BST", () => {
  const n = new Node(10);
  n.insert(5);
  n.insert(15);
  n.insert(0);
  n.insert(20);
  n.left.left.right = new Node(999);

  expect(validate2(n)).toEqual(false);
});