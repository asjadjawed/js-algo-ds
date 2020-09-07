/**
 * Merges 2 sorted arrays
 * @param {number[]} arr1
 * @param {number[]} arr2
 */
const merge = (arr1, arr2) => {
  let output = [];

  for (let i = 0, j = 0; i <= arr1.length && j <= arr2.length; ) {
    if (i === arr1.length) {
      output.push(...arr2.slice(j, arr2.length));
      break;
    }

    if (j === arr2.length) {
      output.push(...arr1.slice(i, arr1.length));
      break;
    }

    if (arr1[i] <= arr2[j]) {
      output.push(arr1[i]);
      i++;
    } else {
      output.push(arr2[j]);
      j++;
    }
  }

  return output;
};

/**
 * Sorts an array using merge sort
 *
 * @param {number[]} arr
 */
const mergeSort = (arr) => {
  if (arr.length <= 1) return arr;
  const mid = Math.floor(arr.length / 2);
  const left = mergeSort(arr.slice(0, mid));
  const right = mergeSort(arr.slice(mid));
  return merge(left, right);
};

module.exports = {
  mergeSort,
  merge,
};
