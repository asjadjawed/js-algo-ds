const {
  areThereDuplicates,
  areThereDuplicatesOneLine,
} = require("./checkDuplicates");

test("check for duplicates", () => {
  expect(areThereDuplicates(1, 2, 3)).toBeFalsy();
  expect(areThereDuplicates(1, 2, 2)).toBeTruthy();
  expect(areThereDuplicates("a", "b", "c", "a")).toBeTruthy();
});

test("check for duplicates", () => {
  expect(areThereDuplicatesOneLine(1, 2, 3)).toBeFalsy();
  expect(areThereDuplicatesOneLine(1, 2, 2)).toBeTruthy();
  expect(areThereDuplicatesOneLine("a", "b", "c", "a")).toBeTruthy();
});
