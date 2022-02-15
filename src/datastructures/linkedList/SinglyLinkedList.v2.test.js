const L = require('./SinglyLinkedList.v2');
const List = L.SinglyLinkedList;
const Node = L.Node;

test('List is a class', () => {
  expect(typeof List.prototype.constructor).toEqual('function');
});

test('Node is a class', () => {
  expect(typeof Node.prototype.constructor).toEqual('function');
});

describe('A Node', () => {
  test("has properties 'data' and 'null'", () => {
    const node = new Node('a', 'b');
    expect(node.data).toEqual('a');
    expect(node.next).toEqual('b');
  });

  test("has properties 'data' and 'null'", () => {
    const node = new Node('a');
    expect(node.data).toEqual('a');
    expect(node.next).toBeNull();
  });
});

describe('Push a value', () => {
  test('adds to the end of the list', () => {
    const l = new List();
    l.push('a');

    l.push('b');

    expect(l.length).toEqual(2);
    expect(l.tail.data).toEqual('b');
  });
});

describe('Pop a value', () => {
  test('RemoveLast removes the last node when list is empty', () => {
    const l = new List();
    expect(() => {
      l.pop();
    }).not.toThrow();
    expect(l.length).toBe(0);
  });

  test('RemoveLast removes the last node when list is length 1', () => {
    const l = new List();
    l.push('a');
    expect(l.pop().data).toEqual('a');
    expect(l.head).toEqual(null);
    expect(l.length).toBe(0);
  });

  test('RemoveLast removes the last node when list is length 2', () => {
    const l = new List();
    l.push('b');
    l.push('a');

    expect(l.pop().data).toBe('a');

    expect(l.length).toEqual(1);
    expect(l.head.data).toEqual('b');
    expect(l.head.next).toBe(null);
    expect(l.tail.data).toEqual('b');
    expect(l.tail.next).toBe(null);
  });

  test('RemoveLast removes the last node when list is length 3', () => {
    const l = new List();
    l.push('c');
    l.push('b');
    l.push('a');
    expect(l.pop().data).toBe('a');

    expect(l.length).toEqual(2);
    expect(l.tail.data).toEqual('b');
    expect(l.tail.next).toBe(null);
    expect(l.head.data).toEqual('c');
    expect(l.head.next.data).toEqual('b');
  });
});

describe('Shift value', () => {
  test('removes the first node when the list has a size of one', () => {
    const l = new List();
    l.push('a');
    expect(l.shift().data).toBe('a');
    expect(l.length).toEqual(0);
    expect(l.head).toEqual(null);
  });

  test('removes the first node when the list has a size of three', () => {
    const l = new List();
    l.push('c');
    l.push('b');
    l.push('a');
    expect(l.shift().data).toBe('c');
    expect(l.length).toEqual(2);
    expect(l.head.data).toEqual('b');
    expect(l.shift().data).toBe('b');
    expect(l.length).toEqual(1);
    expect(l.head.data).toEqual('a');
  });
});

describe('unshift', () => {
  test('appends a node to the start of the list', () => {
    const l = new List();
    l.unshift(1);
    expect(l.head.data).toEqual(1);
    l.unshift(2);
    expect(l.head.data).toEqual(2);
    expect(l.length).toEqual(2);
  });
});

describe('get index', () => {
  test('get index from ll', () => {
    const l = new List();
    expect(l.get(10)).toBeNull();
    expect(l.get(-1)).toBeNull();

    l.push(0);
    l.push(1);
    l.push(2);
    l.push(3);

    expect(l.get(0).data).toBe(0);
    expect(l.get(1).data).toBe(1);
    expect(l.get(2).data).toBe(2);
    expect(l.get(3).data).toBe(3);
  });
});

describe('set index with value', () => {
  test('set value in ll with index', () => {
    const l = new List();
    expect(l.set(10, 'a')).toBeFalsy();
    expect(l.set(-1, 'c')).toBeFalsy();

    l.push(0);
    expect(l.set(0, 'a')).toBeTruthy();
    l.push(1);
    l.set(1, 'b');
    l.push(2);
    l.set(2, 'c');
    l.push(3);
    l.set(3, 'd');

    expect(l.get(0).data).toBe('a');
    expect(l.get(1).data).toBe('b');
    expect(l.get(2).data).toBe('c');
    expect(l.get(3).data).toBe('d');
  });
});

describe('inserting values', () => {
  let l;

  beforeEach(() => {
    l = new List();
    l.push(0);
    l.push(1);
    l.push(2);
    l.push(3);
  });

  test('invalid insert', () => {
    expect(l.insert(1000, 'a')).toBe(false);
    expect(l.insert(-1000, 'a')).toBe(false);
  });

  test('inserting at start', () => {
    expect(l.insert(0, 'a')).toBe(true);
    expect(l.head.data).toBe('a');
    expect(l.head.next.data).toBe(0);
    expect(l.length).toBe(5);
  });

  test('inserting at end', () => {
    expect(l.insert(l.length, 'a')).toBe(true);
    expect(l.tail.data).toBe('a');
    expect(l.tail.next).toBeNull();
    expect(l.length).toBe(5);
  });

  test('inserting in the middle', () => {
    expect(l.insert(1, 'a')).toBe(true);
    expect(l.get(1).data).toBe('a');
    expect(l.get(1).next.data).toBe(1);
    expect(l.length).toBe(5);
  });
});

describe('removing values', () => {
  let l;

  beforeEach(() => {
    l = new List();
    l.push(0);
    l.push(1);
    l.push(2);
    l.push(3);
  });

  test('invalid insert', () => {
    expect(l.remove(1000, 'a')).toBeNull();
    expect(l.remove(-1000, 'a')).toBeNull();
  });

  test('inserting at start', () => {
    expect(l.remove(0).data).toBe(0);
    expect(l.head.data).toBe(1);
    expect(l.head.next.data).toBe(2);
    expect(l.length).toBe(3);
  });

  test('inserting at end', () => {
    expect(l.remove(l.length).data).toBe(3);
    expect(l.tail.data).toBe(2);
    expect(l.tail.next).toBeNull();
    expect(l.length).toBe(3);
  });

  test('inserting in the middle', () => {
    expect(l.remove(1).data).toBe(1);
    expect(l.get(1).data).toBe(2);
    expect(l.get(1).next.data).toBe(3);
    expect(l.length).toBe(3);
  });
});

describe('reversing', () => {
  let l;

  beforeEach(() => {
    l = new List();
    l.push(0);
    l.push(1);
    l.push(2);
    l.push(3);
  });

  test('reverse', () => {
    l.reverse();
    expect(l.pop().data).toBe(0);
    expect(l.pop().data).toBe(1);
    expect(l.pop().data).toBe(2);
    expect(l.pop().data).toBe(3);
  });
});
