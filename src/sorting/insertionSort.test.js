const { insertionSort, insertionSort2 } = require('./insertionSort');

test('Insertion Sort', () => {
  expect(insertionSort([])).toEqual([]);
  expect(insertionSort([4])).toEqual([4]);
  expect(insertionSort([4, 300, 62])).toEqual([4, 62, 300]);
  expect(insertionSort([37, 45, 29, 8])).toEqual([8, 29, 37, 45]);
  expect(insertionSort([-3, -45])).toEqual([-45, -3]);
  expect(insertionSort([1, 2, 3, 4])).toEqual([1, 2, 3, 4]); // last 2 to check if it is doing extra passes
  expect(insertionSort([1, 3, 2, 4])).toEqual([1, 2, 3, 4]);
  expect(insertionSort([10, 5, 5, 3])).toEqual([3, 5, 5, 10]);
});

test('Insertion Sort', () => {
  expect(insertionSort2([])).toEqual([]);
  expect(insertionSort2([4])).toEqual([4]);
  expect(insertionSort2([4, 300, 62])).toEqual([4, 62, 300]);
  expect(insertionSort2([37, 45, 29, 8])).toEqual([8, 29, 37, 45]);
  expect(insertionSort2([-3, -45])).toEqual([-45, -3]);
  expect(insertionSort2([1, 2, 3, 4])).toEqual([1, 2, 3, 4]); // last 2 to check if it is doing extra passes
  expect(insertionSort2([1, 3, 2, 4])).toEqual([1, 2, 3, 4]);
  expect(insertionSort2([10, 5, 5, 3])).toEqual([3, 5, 5, 10]);
});
