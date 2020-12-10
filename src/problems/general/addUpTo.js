//@ts-check

/**
 * Sums up to number n for all positive values of n.
 * Complexity O(1)
 * @param {number} n
 */
const addUpTo = (n) => (n * (n + 1)) / 2;

/**
 * Sums up to number n for all positive values of n.
 * This uses Iteration not as efficient as addUpTo.
 * Complexity O(n)
 * @param {number} n
 */
const addUpToIter = (n) => {
  let sum = 0;
  for (let i = 0; i <= n; i++) {
    sum += i;
  }
  return sum;
};

module.exports = { addUpTo, addUpToIter };
