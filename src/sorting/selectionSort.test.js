const { selectionSort } = require("./selectionSort");

test("Selection Sort", () => {
  expect(selectionSort([])).toEqual([]);
  expect(selectionSort([4])).toEqual([4]);
  expect(selectionSort([4, 300, 62])).toEqual([4, 62, 300]);
  expect(selectionSort([37, 45, 29, 8])).toEqual([8, 29, 37, 45]);
  expect(selectionSort([-3, -45])).toEqual([-45, -3]);
  expect(selectionSort([1, 2, 3, 4])).toEqual([1, 2, 3, 4]); // last 2 to check if it is doing extra passes
  expect(selectionSort([1, 3, 2, 4])).toEqual([1, 2, 3, 4]);
  expect(selectionSort([10, 5, 5, 3])).toEqual([3, 5, 5, 10]);
});
