const { collectOddValues, collectOddValuesPure } = require("./recursionHelper");

test("Return odd values", () => {
  expect(collectOddValues([1, 2, 3])).toEqual([1, 3]);
  expect(collectOddValues([1, 2, 3, 4, 5, 6, 7, 8, 9])).toEqual([
    1,
    3,
    5,
    7,
    9,
  ]);
});

test("Return odd values", () => {
  expect(collectOddValuesPure([1, 2, 3])).toEqual([1, 3]);
  expect(collectOddValuesPure([1, 2, 3, 4, 5, 6, 7, 8, 9])).toEqual([
    1,
    3,
    5,
    7,
    9,
  ]);
});
