/**
 * Return number of substring in the larger string
 * @param {string} str
 * @param {string} subStr
 */
const stringSearch = (str, subStr) => {
  let count = 0;

  for (let i = 0; i < str.length; i++) {
    if (str.slice(i, i + subStr.length) === subStr) count++;
  }

  return count;
};

module.exports = {
  stringSearch,
};
