const { checkPalindrome, checkPalindromeRec } = require('./palindrome');

test('checks if the string is a palindrome', () => {
  expect(checkPalindrome('')).toBeTruthy();
  expect(checkPalindrome('a')).toBeTruthy();
  expect(checkPalindrome('base')).toBeFalsy();
  expect(checkPalindrome('abba')).toBeTruthy();
  expect(checkPalindrome('deed')).toBeTruthy();
  expect(checkPalindrome('racecar')).toBeTruthy();
  expect(checkPalindrome('civic')).toBeTruthy();
});

test('checks if the string is a palindrome - recursion', () => {
  expect(checkPalindromeRec('')).toBeTruthy();
  expect(checkPalindromeRec('a')).toBeTruthy();
  expect(checkPalindromeRec('base')).toBeFalsy();
  expect(checkPalindromeRec('abba')).toBeTruthy();
  expect(checkPalindromeRec('deed')).toBeTruthy();
  expect(checkPalindromeRec('racecar')).toBeTruthy();
  expect(checkPalindromeRec('civic')).toBeTruthy();
});
