/**
 * Sorts an array using Selection Sort
 *
 * Complexity O(n^2)
 *
 * @param {number[]} arr
 */
const selectionSort = (arr) => {
  for (let i = 0; i < arr.length; i++) {
    let min = i;
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[min] >= arr[j]) min = j;
    }
    if (i !== min) [arr[i], arr[min]] = [arr[min], arr[i]];
  }
  return arr;
};

module.exports = {
  selectionSort,
};
