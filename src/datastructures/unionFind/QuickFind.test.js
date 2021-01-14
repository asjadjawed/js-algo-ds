const { QuickFind } = require("./QuickFind");

test("QuickFind Class", () => {
  const qf = new QuickFind(5);
  expect(qf.data.length).toEqual(5);
  expect(qf.connected(1, 2)).toBeFalsy();

  qf.union(1, 2);

  expect(qf.connected(1, 2)).toBeTruthy();
});
