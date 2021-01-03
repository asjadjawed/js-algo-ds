const averagePair = require("./averagePair");

test("checks if there is an average pair", () => {
  expect(averagePair([1, 2, 3], 2.5)).toBeTruthy();
  expect(averagePair([1, 3, 3, 5, 6, 7, 10, 12, 19], 8)).toBeTruthy();
  expect(averagePair([-1, 0, 3, 4, 5, 6], 4.1)).toBeFalsy();
  expect(averagePair([0, 0.2, 0.5, 1, 2], 1.1)).toBeTruthy();
  expect(averagePair([], 4)).toBeFalsy();
});
