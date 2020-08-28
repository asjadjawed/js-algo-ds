const { squaredArrayCheck, validAnagram } = require("./frequencyCounter");

test("check frequency counter - simple", () => {
  expect(squaredArrayCheck([2], [4])).toBeTruthy();
  expect(squaredArrayCheck([2], [5])).toBeFalsy();
});

test("check frequency counter - invalid", () => {
  expect(() => squaredArrayCheck()).toThrow();
  expect(() => squaredArrayCheck([])).toThrow();
});

test("check frequency counter - empty or unequal length", () => {
  expect(squaredArrayCheck([], [])).toBeTruthy();
  expect(squaredArrayCheck([1, 7], [49])).toBeFalsy();
});

test("check frequency counter - complex", () => {
  expect(squaredArrayCheck([1, 2, 3], [1, 9, 4])).toBeTruthy();
  expect(squaredArrayCheck([1, 2, 3], [1, 10, 4])).toBeFalsy();
  expect(squaredArrayCheck([1, 2, 1], [1, 1, 4])).toBeTruthy();
  expect(squaredArrayCheck([1, 2, 1], [1, 4, 4])).toBeFalsy();
  expect(squaredArrayCheck([2, 2, 2, 2, 3], [9, 4, 4, 4, 4])).toBeTruthy();
  expect(squaredArrayCheck([1, 2, 3, 2, 5], [9, 1, 4, 4, 11])).toBeFalsy();
});

test("anagram checker", () => {
  expect(validAnagram("", "")).toBeTruthy();
  expect(validAnagram("aaz", "zza")).toBeFalsy();
  expect(validAnagram("anagram", "nagaram")).toBeTruthy();
  expect(validAnagram("rat", "car")).toBeFalsy();
  expect(validAnagram("awesome", "awesom")).toBeFalsy();
  expect(validAnagram("qwerty", "qeywrt")).toBeTruthy();
});
