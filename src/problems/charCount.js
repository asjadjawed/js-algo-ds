/**
 * Counts the characters in a string. Only alphanumeric skips symbols and whitespace
 * @param {string} str
 */
const charCount = (str) => {
  if (!str) throw new Error("Invalid argument!");

  const countChars = {};

  for (let l of str) {
    if (/[^A-z0-9]/.test(l)) continue;
    l = l.toLowerCase();
    countChars[l] ? countChars[l]++ : (countChars[l] = 1);
  }

  return countChars;
};

module.exports = {
  charCount,
};
