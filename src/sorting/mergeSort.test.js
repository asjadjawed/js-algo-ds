const { merge, mergeSort } = require("./mergeSort");

test("Merge - sub-process", () => {
  expect(merge([], [])).toEqual([]);
  expect(merge([], [1])).toEqual([1]);
  expect(merge([1], [])).toEqual([1]);
  expect(merge([1, 2, 3], [1, 2, 3])).toEqual([1, 1, 2, 2, 3, 3]);
  expect(merge([1, 2, 3, 4], [1, 2, 3])).toEqual([1, 1, 2, 2, 3, 3, 4]);
  expect(merge([1, 2, 3], [1, 2, 3, 4])).toEqual([1, 1, 2, 2, 3, 3, 4]);
  expect(merge([4, 5, 6], [1, 2, 3])).toEqual([1, 2, 3, 4, 5, 6]);
  expect(merge([1, 2, 3], [4, 5, 6])).toEqual([1, 2, 3, 4, 5, 6]);
  expect(merge([-10, 0, 100], [1, 11, 500])).toEqual([-10, 0, 1, 11, 100, 500]);
  expect(merge([-1, -1, -1], [-1, -1, 10])).toEqual([-1, -1, -1, -1, -1, 10]);
});

test("Merge Sort", () => {
  expect(mergeSort([])).toEqual([]);
  expect(mergeSort([4])).toEqual([4]);
  expect(mergeSort([4, 300, 62])).toEqual([4, 62, 300]);
  expect(mergeSort([37, 45, 29, 8])).toEqual([8, 29, 37, 45]);
  expect(mergeSort([-3, -45])).toEqual([-45, -3]);
  expect(mergeSort([1, 2, 3, 4])).toEqual([1, 2, 3, 4]); // last 2 to check if it is doing extra passes
  expect(mergeSort([1, 3, 2, 4])).toEqual([1, 2, 3, 4]);
  expect(mergeSort([10, 5, 5, 3])).toEqual([3, 5, 5, 10]);
});
