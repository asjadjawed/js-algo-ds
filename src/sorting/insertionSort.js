/**
 * Sorts an array using insertion sort
 *
 * This has a complexity of O(n^2)
 *
 * This is also efficient for nearly sorted array O(n)
 * Or when values are being continuously added / streamed (running sort)
 *
 * @param {number[]} arr
 */
const insertionSort = (arr) => {
  // starting outer loop from the second element
  // left hand side will always be sorted
  for (let i = 1; i < arr.length; i++) {
    let current = arr[i];
    // j loops from i all the way to 0
    // it stops where value of j is greater the current value of outer loop
    // this is the point to insert
    for (var j = i - 1; j >= 0 && arr[j] > current; j--) {
      // the inner loop moves all the value to right by making duplicates
      // this makes space for where to insert the 'current value' in place of duplicate
      arr[j + 1] = arr[j];
    }
    // insert current value where j stopped
    // we need to refer j outside of its scope so var was used instead of let
    arr[j + 1] = current;
  }
  return arr;
};

const insertionSort2 = (arr) => {
  for (let i = 1; i < arr.length; i++) {
    for (let j = i; j > 0 && arr[j] < arr[j - 1]; j--) {
      [arr[j], arr[j - 1]] = [arr[j - 1], arr[j]];
    }
  }
  return arr;
};

module.exports = {
  insertionSort,
  insertionSort2,
};
