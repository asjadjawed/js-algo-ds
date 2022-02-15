const { QuickUnion } = require('./QuickUnion');

test('UnionFind Class', () => {
  const uf = new QuickUnion(5);
  expect(uf.data.length).toEqual(5);
  expect(uf.connected(1, 2)).toBeFalsy();

  uf.union(1, 2);

  expect(uf.connected(1, 2)).toBeTruthy();
});
