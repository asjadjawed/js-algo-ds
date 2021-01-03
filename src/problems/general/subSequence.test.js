const isSubsequence = require("./subSequence");

test("check if subsequence", () => {
  expect(isSubsequence("hello", "hello world")).toBeTruthy();
  expect(isSubsequence("sing", "sting")).toBeTruthy();
  expect(isSubsequence("abc", "abracadabra")).toBeTruthy();
  expect(isSubsequence("abc", "acb")).toBeFalsy();
});
