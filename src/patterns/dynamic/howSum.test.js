const howSum = require("./howSum");

test("if the given numbers can add up to the target, returning the elements", () => {
  expect(howSum(7, [2, 3])).toEqual([3, 2, 2]);
  expect(howSum(7, [5, 3, 4, 7])).toEqual([4, 3]);
  expect(howSum(7, [2, 4])).toBe(null);
  expect(howSum(8, [2, 3, 5])).toEqual([2, 2, 2, 2]);
  expect(howSum(300, [7, 14])).toBe(null);
});
