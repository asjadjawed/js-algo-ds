/**
 * Counts the characters in a string. Only alphanumeric skips symbols and whitespace
 * @param {string} str
 */
const charCount = (str) => {
  if (!str) throw new Error('Invalid argument!');

  const countChars = {};

  for (let l of str) {
    if (/[^A-z0-9]/.test(l)) continue;
    l = l.toLowerCase();
    countChars[l] ? countChars[l]++ : (countChars[l] = 1);
  }

  return countChars;
};

/**
 * Returns the most repeated character in a string
 * (Max characters in a string)
 *
 * @param {string} str
 */
const maxCharCount = (str) => {
  if (!str) return;

  const map = {};
  let highest = 0;
  let highestChar = '';

  for (const c of str) {
    map[c] ? map[c]++ : (map[c] = 1);

    if (map[c] > highest) {
      highestChar = c;
      highest = map[c];
    }
  }
  return highestChar;
};

module.exports = {
  charCount,
  maxCharCount
};
