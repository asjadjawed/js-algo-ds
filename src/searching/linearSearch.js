/**
 * Linear search for array using value
 * @param {number[]} arr
 * @param {number} value
 */
const linearSearch = (arr, value) => {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === value) return i;
  }
  return -1;
};

module.exports = {
  linearSearch,
};
