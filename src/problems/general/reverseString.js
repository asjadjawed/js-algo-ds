/**
 * Reverse the string
 *
 * @param {string} str
 */
const reverseString = (str) => {
  let reversed = '';
  for (let i = str.length - 1; i >= 0; i--) {
    reversed += str[i];
  }
  return reversed;
};

/**
 * Reverse string recursively
 *
 * @param {string} str
 */
const reverseStringRec = (str) => {
  if (str.length === 0) return '';
  return str[str.length - 1] + reverseString(str.slice(0, str.length - 1));
};

/**
 * Reverse string using JS built in methods
 *
 * @param {string} str
 */
const reverseStringBuiltIn = (str) => str.split('').reverse().join('');

module.exports = {
  reverseString,
  reverseStringRec,
  reverseStringBuiltIn
};
