const { BinarySearchTree: BST, Node } = require("./BinarySearchTree.v2");

test("Node is a constructor", () => {
  expect(typeof BST.prototype.constructor).toEqual("function");
  expect(typeof Node.prototype.constructor).toEqual("function");
});

test("Node can insert correctly", () => {
  const bst = new BST();
  bst.insert(10);
  bst.insert(10);
  bst.insert(10);
  bst.insert(5);
  bst.insert(15);
  bst.insert(17);

  expect(bst.root.value).toEqual(10);
  expect(bst.root.left.value).toEqual(5);
  expect(bst.root.right.value).toEqual(15);
  expect(bst.root.right.right.value).toEqual(17);
});

test("Contains returns node with the same data", () => {
  const bst = new BST();
  bst.insert(10);
  bst.insert(5);
  bst.insert(15);
  bst.insert(20);
  bst.insert(0);
  bst.insert(-5);
  bst.insert(3);

  const three = bst.root.left.left.right;
  expect(bst.find(3)).toEqual(three);
});

test("Contains returns null if value not found", () => {
  const bst = new BST();
  bst.insert(10);
  bst.insert(5);
  bst.insert(15);
  bst.insert(20);
  bst.insert(0);
  bst.insert(-5);
  bst.insert(3);

  expect(bst.find(9999)).toEqual(null);
});
