const { binarySearch } = require('./binarySearch');

test('binary search for value in sorted array', () => {
  expect(binarySearch([], 10)).toBe(-1);
  expect(binarySearch([10], 10)).toBe(0);
  expect(binarySearch([1, 2, 3, 4, 5, 6], 10)).toBe(-1);
  expect(binarySearch([0, 1, 2, 3, 4, 5, 6], 3)).toBe(3);
  expect(binarySearch([0, 1, 2, 3, 4, 5, 6], 2)).toBe(2);
  expect(binarySearch([0, 1, 2, 3, 4, 5, 6], 5)).toBe(5);
  expect(binarySearch([0, 1, 2, 3, 4, 5, 6], 0)).toBe(0);
  expect(binarySearch([0, 1, 2, 3, 4, 5, 6], 6)).toBe(6);
  expect(binarySearch([0, 1, 2, 3, 4, 5, 6], -100)).toBe(-1);
  expect(binarySearch([0, 1, 2, 3, 4, 5, 6], 100)).toBe(-1);
  expect(binarySearch([1, 2, 34, 56], 56)).toBe(3);
});
