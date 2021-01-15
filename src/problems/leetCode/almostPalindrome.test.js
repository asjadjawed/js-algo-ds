const validPalindrome = require("./almostPalindrome");

test("Checking is almost palindrome", () => {
  expect(validPalindrome("aba")).toBe(true);
  expect(validPalindrome("abba")).toBe(true);
  expect(validPalindrome("raceacar")).toBe(true);
  expect(validPalindrome("abccdba")).toBe(true);
  expect(validPalindrome("abcdefdba")).toBe(false);
  expect(validPalindrome("")).toBe(true);
  expect(validPalindrome("a")).toBe(true);
  expect(validPalindrome("ab")).toBe(true);
});
