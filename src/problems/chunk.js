/**
 * Returns nested array of chunk size n
 *
 * @param {number[]} arr
 * @param {number} n
 */
const chunk = (arr, n) => {
  let chunked = [];
  let chunk = [];

  for (let i = 0; i < arr.length; i++) {
    chunk.push(arr[i]);

    if (chunk.length === n) {
      chunked.push([...chunk]);
      chunk = [];
    }
  }

  if (chunk.length) chunked.push([...chunk]);
  return chunked;
};

module.exports = {
  chunk,
};
