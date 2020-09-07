const { pivot, quickSort } = require("./quickSort");

test("pivot for quick sort", () => {
  expect(pivot([])).toBe(0);
  expect(pivot([1])).toBe(0);
  expect(pivot([3, 1, 2, 4])).toBe(2);
  expect(pivot([3, 1, 1, 1])).toBe(3);
  expect(pivot([0, -1, -21, -31])).toBe(3);
});

test("Quick Sort", () => {
  expect(quickSort([])).toEqual([]);
  expect(quickSort([4])).toEqual([4]);
  expect(quickSort([4, 300, 62])).toEqual([4, 62, 300]);
  expect(quickSort([37, 45, 29, 8])).toEqual([8, 29, 37, 45]);
  expect(quickSort([-3, -45])).toEqual([-45, -3]);
  expect(quickSort([1, 2, 3, 4])).toEqual([1, 2, 3, 4]); // last 2 to check if it is doing extra passes
  expect(quickSort([1, 3, 2, 4])).toEqual([1, 2, 3, 4]);
  expect(quickSort([10, 5, 5, 3])).toEqual([3, 5, 5, 10]);
});
