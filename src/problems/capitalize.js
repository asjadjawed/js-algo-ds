/**
 * Capitalize first letter of every word
 *
 * @param {string} str
 */
const capitalize = (str) => {
  return str
    .split(" ")
    .map((w) => w[0].toUpperCase() + w.slice(1))
    .join(" ");
};

module.exports = { capitalize };
