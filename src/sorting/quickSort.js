/**
 * Returns pivot for quick sort
 *
 * @param {number[]} arr
 * @param {number} start
 * @param {number} end end = arr.length - 1 (removed)
 */
const pivot = (arr, start = 0) => {
  let pivotPoint = arr[start];
  let swapIndex = start;

  for (let i = start + 1; i < arr.length; i++) {
    if (pivotPoint > arr[i]) {
      swapIndex++;
      [arr[i], arr[swapIndex]] = [arr[swapIndex], arr[i]];
    }
  }
  [arr[start], arr[swapIndex]] = [arr[swapIndex], arr[start]];
  return swapIndex;
};

/**
 * Sorts an array using quick sort
 *
 * @param {number[]} arr
 * @param {number} left
 * @param {number} right
 */
const quickSort = (arr, left = 0, right = arr.length - 1) => {
  if (left < right) {
    const pivotIndex = pivot(arr, left); // sorting
    quickSort(arr, left, pivotIndex - 1); // left
    quickSort(arr, pivotIndex + 1, right); // right
  }
  return arr;
};

module.exports = {
  pivot,
  quickSort,
};
