/**
 * Checks if the string is a palindrome
 *
 * @param {string} str
 */
const checkPalindrome = (str) => {
  if (str.length === 1) return true;
  let i = 0;
  let j = str.length - 1;
  while (i <= j) {
    if (str[i] !== str[j]) return false;
    i++;
    j--;
  }
  return true;
};

/**
 * Check palindrome via recursion
 *
 * @param {string} str
 */
const checkPalindromeRec = (str) => {
  if (str.length <= 1) return true;
  else if (str[0] !== str[str.length - 1]) return false;
  return checkPalindromeRec(str.slice(1, str.length - 1));
};

module.exports = { checkPalindrome, checkPalindromeRec };
