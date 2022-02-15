const canSum = require('./canSum');

test('if the given numbers can add up to the target', () => {
  expect(canSum(7, [2, 3])).toBe(true);
  expect(canSum(7, [5, 3, 4, 7])).toBe(true);
  expect(canSum(7, [2, 4])).toBe(false);
  expect(canSum(8, [2, 3, 5])).toBe(true);
  expect(canSum(300, [7, 14])).toBe(false);
});
