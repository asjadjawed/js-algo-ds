const { maxSubArraySum } = require('./slidingWindow');

test('max sub array sum - invalid', () => {
  expect(maxSubArraySum([1], 0)).toBeUndefined();
  expect(maxSubArraySum([1, 2], 10)).toBeUndefined();
});

test('max sub array sum - simple', () => {
  expect(maxSubArraySum([1], 1)).toBe(1);
  expect(maxSubArraySum([1, 2], 1)).toBe(2);
  expect(maxSubArraySum([2, 1], 1)).toBe(2);
});

test('max sub array sum - complex', () => {
  expect(maxSubArraySum([1, 2, 5, 2, 8, 1, 5], 2)).toBe(10);
  expect(maxSubArraySum([1, 2, 5, 2, 8, 1, 5], 4)).toBe(17);
  expect(maxSubArraySum([4, 2, 1, 6], 1)).toBe(6);
  expect(maxSubArraySum([4, 2, 1, 6], 4)).toBe(13);
  expect(maxSubArraySum([-1, -2, -3, -1, 0], 2)).toBe(-1);
  expect(maxSubArraySum([], 4)).toBeUndefined();
});
