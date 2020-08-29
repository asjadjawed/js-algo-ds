const { sumZero, countUnique } = require("./multiplePointers");

test("sum zero test - complex", () => {
  expect(sumZero([-3, -2, -1, 0, 1, 2, 3])).toEqual([-3, 3]);
  expect(sumZero([-4, -3, -2, -1, 0, 1, 2, 5])).toEqual([-2, 2]);
  expect(sumZero([-2, 0, 1, 3])).toBeUndefined();
  expect(sumZero([-5, 0, 4])).toBeUndefined();
  expect(sumZero([1, 2, 3])).toBeUndefined();
});

test("sum zero test - simple", () => {
  expect(sumZero([1, -1])).toEqual([1, -1]);
  expect(sumZero([1, 2])).toBeUndefined();
  expect(sumZero([0, 0])).toEqual([0, 0]);
});

test("sum zero test - invalid / zero / empty", () => {
  expect(sumZero()).toBeUndefined();
  expect(sumZero([])).toBeUndefined();
  expect(sumZero([0])).toBeUndefined();
  expect(sumZero([0, 0])).toEqual([0, 0]);
});

test("count unique values", () => {
  expect(countUnique([1, 1, 1, 1, 1, 2])).toBe(2);
  expect(countUnique([1, 2, 3, 4, 4, 4, 7, 7, 12, 12, 13])).toBe(7);
  expect(countUnique([])).toBe(0);
  expect(countUnique([1])).toBe(1);
  expect(countUnique([-2, -1, -1, 0, 1])).toBe(4);
  expect(() => countUnique()).toThrow();
});
