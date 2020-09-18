/**
 * Prints a staircase with n number of steps
 *
 * @param {number} n
 */
const steps = (n) => {
  for (let i = 1; i <= n; i++) {
    console.log("#".repeat(i) + " ".repeat(n - i));
  }
};

/**
 * Prints a staircase with n number of steps - Recursive solution
 *
 * @param {number} n
 */
const stepsRecur = (n, i = 1) => {
  if (i === n) {
    console.log("#".repeat(n));
    return;
  }
  console.log("#".repeat(i) + " ".repeat(n - i));
  return stepsRecur(n, i + 1);
};

module.exports = {
  steps,
  stepsRecur,
};
