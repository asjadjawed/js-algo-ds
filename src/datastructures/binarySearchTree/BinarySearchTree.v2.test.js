const { BinarySearchTree: BST, Node } = require('./BinarySearchTree.v2');

test('Node is a constructor', () => {
  expect(typeof BST.prototype.constructor).toEqual('function');
  expect(typeof Node.prototype.constructor).toEqual('function');
});

test('Node can insert correctly', () => {
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

test('Contains returns node with the same data', () => {
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

test('Contains returns null if value not found', () => {
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

describe('testing tree search', () => {
  let bst;

  beforeEach(() => {
    bst = new BST();

    bst.insert(10);
    bst.insert(6);
    bst.insert(15);
    bst.insert(3);
    bst.insert(8);
    bst.insert(20);
  });

  test('Breadth first search', () => {
    expect(bst.BFS()).toEqual([10, 6, 15, 3, 8, 20]);
  });

  test('Depth first search - Pre Order', () => {
    expect(bst.DFSPreOrder()).toEqual([10, 6, 3, 8, 15, 20]);
  });

  test('Depth first search - Post Order', () => {
    expect(bst.DFSPostOrder()).toEqual([3, 8, 6, 20, 15, 10]);
  });

  test('Depth first search - In Order', () => {
    expect(bst.DFSInOrder()).toEqual([3, 6, 8, 10, 15, 20]);
  });
});
