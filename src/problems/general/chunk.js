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

/**
 * Returns nested array of chunk size n using slice
 *
 * @param {number[]} arr
 * @param {number} n
 */
const chunkSlice = (arr, n) => {
  let chunked = [];
  let i = 0;

  while (i < arr.length) {
    chunked.push(arr.slice(i, i + n));
    i += n;
  }

  return chunked;
};

module.exports = {
  chunk,
  chunkSlice,
};
