const { addUpTo, addUpToIter } = require("./addUpTo");

test("Test for add up to number - n", () => {
  expect(addUpTo(0)).toEqual(0);
  expect(addUpTo(1)).toEqual(1);
  expect(addUpTo(2)).toEqual(3);
  expect(addUpTo(3)).toEqual(6);
  expect(addUpTo(10)).toEqual(55);
  expect(addUpTo(100)).toEqual(5050);
  expect(addUpTo(100000000)).toEqual(5000000050000000);
});

test("Test for add up to number - n. Uses Iteration", () => {
  expect(addUpToIter(0)).toEqual(0);
  expect(addUpToIter(1)).toEqual(1);
  expect(addUpToIter(2)).toEqual(3);
  expect(addUpToIter(3)).toEqual(6);
  expect(addUpToIter(10)).toEqual(55);
  expect(addUpToIter(100)).toEqual(5050);
  expect(addUpToIter(100000000)).toEqual(5000000050000000);
});
