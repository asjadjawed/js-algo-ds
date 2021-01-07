const maxArea = require("./containerWater");

test("return the max area of water array can hold", () => {
  expect(maxArea([])).toBeNull();
  expect(maxArea([1])).toBeNull();
  expect(maxArea([1, 1])).toEqual(1);
  expect(maxArea([4, 3, 2, 1, 4])).toEqual(16);
  expect(maxArea([4, 8, 1, 2, 3, 9])).toEqual(32);
  expect(maxArea([1, 2, 1])).toEqual(2);
  expect(maxArea([1, 8, 6, 2, 5, 4, 8, 3, 7])).toEqual(49);
});
