const { minimumSwaps } = require("./minimumSwaps");

test("minimum swaps", () => {
  expect(minimumSwaps([7, 1, 3, 2, 4, 5, 6])).toBe(5);
  expect(minimumSwaps([4, 3, 1, 2])).toBe(3);
  expect(minimumSwaps([2, 3, 4, 1, 5])).toBe(3);
  expect(minimumSwaps([1, 3, 5, 2, 4, 6, 7])).toBe(3);
});
