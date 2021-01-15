/**
 * @param {string} s
 * @return {boolean}
 */
const validPalindrome = (s) => {
  let i = 0;
  let j = s.length - 1;
  while (i < j) {
    if (s[i] !== s[j]) {
      return checkSubPalindrome(s, i + 1, j) || checkSubPalindrome(s, i, j - 1);
    }
    i++;
    j--;
  }
  return true;
};

/**
 * @param {string} s
 * @returns {boolean}
 */
const checkSubPalindrome = (s, i = 0, j = s.length - 1) => {
  while (i < j) {
    if (s[i] !== s[j]) return false;
    i++;
    j--;
  }
  return true;
};

module.exports = validPalindrome;
