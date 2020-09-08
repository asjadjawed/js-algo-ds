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

module.exports = { checkPalindrome };
