/**
 * Sorts an array using bubble sort
 *
 * This has a complexity of O(n^2)
 * but if data is nearly sorted the complexity is almost O(n)
 *
 * @param {number[]} arr
 */
const bubbleSort = (arr) => {
  for (let i = arr.length - 1; i >= 0; i--) {
    let swapped = false;
    for (let j = 0; j < i; j++) {
      if (arr[j] > arr[j + 1]) {
        [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]];
        swapped = true;
      }
    }
    if (!swapped) return arr;
  }
  return arr;
};

module.exports = {
  bubbleSort,
};
