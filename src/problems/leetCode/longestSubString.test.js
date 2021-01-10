const ls = require("./longestSubString");

test("Longest Substring Without Repeating Characters", () => {
  expect(ls("")).toBe(0);
  expect(ls("a")).toBe(1);
  expect(ls("abcd")).toBe(4);
  expect(ls("bbbbb")).toBe(1);
  expect(ls("pwwkew")).toBe(3);
  expect(ls("abcabcbb")).toBe(3);
  expect(ls("dvdf")).toBe(3);
  expect(ls("abba")).toBe(2);
});
