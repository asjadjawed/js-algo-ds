/**
 * Sliding Window pattern is useful for finding or analyzing a subset of continuos data from a string or array
 */

/**
 * Find the maximum sum of of n consecutive elements in the array (arr)
 * @param {number[]} arr array of numbers
 * @param {number} n sub array length
 * @returns sum
 */
const maxSubArraySum = (arr, n) => {
  if (n === 0 || n > arr.length) return;

  let sum = arr.slice(0, n).reduce((n1, n2) => n1 + n2, 0); // window
  let highest = sum;
  let i = 0; // i = start j = end

  for (let j = n; j < arr.length; j++) {
    sum = sum - arr[i] + arr[j]; // sliding
    i++;
    if (sum > highest) highest = sum;
  }

  return highest;
};

module.exports = {
  maxSubArraySum
};
