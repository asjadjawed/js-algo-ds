const { bubbleSort } = require("./bubbleSort");

test("Bubble Sort", () => {
  expect(bubbleSort([])).toEqual([]);
  expect(bubbleSort([4])).toEqual([4]);
  expect(bubbleSort([4, 300, 62])).toEqual([4, 62, 300]);
  expect(bubbleSort([37, 45, 29, 8])).toEqual([8, 29, 37, 45]);
  expect(bubbleSort([-3, -45])).toEqual([-45, -3]);
  expect(bubbleSort([1, 2, 3, 4])).toEqual([1, 2, 3, 4]); // last 2 to check if it is doing extra passes
  expect(bubbleSort([1, 3, 2, 4])).toEqual([1, 2, 3, 4]);
  expect(bubbleSort([10, 5, 5, 3])).toEqual([3, 5, 5, 10]);
});
