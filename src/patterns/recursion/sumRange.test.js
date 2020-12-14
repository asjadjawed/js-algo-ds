const { sumRange } = require("./sumRange");

test("Test for add up to number - n", () => {
  expect(sumRange(0)).toEqual(0);
  expect(sumRange(1)).toEqual(1);
  expect(sumRange(2)).toEqual(3);
  expect(sumRange(3)).toEqual(6);
  expect(sumRange(10)).toEqual(55);
  expect(sumRange(100)).toEqual(5050);
  expect(sumRange(10000)).toEqual(50005000);
});
