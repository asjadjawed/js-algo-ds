const { checkPalindrome } = require("./palindrome");

test("checks if the string is a palindrome", () => {
  expect(checkPalindrome("")).toBeTruthy();
  expect(checkPalindrome("a")).toBeTruthy();
  expect(checkPalindrome("base")).toBeFalsy();
  expect(checkPalindrome("abba")).toBeTruthy();
  expect(checkPalindrome("deed")).toBeTruthy();
  expect(checkPalindrome("racecar")).toBeTruthy();
  expect(checkPalindrome("civic")).toBeTruthy();
});
