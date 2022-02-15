/**
 * Finds factorial of n
 * @param {number} n
 */
const factorialIter = (n) => {
  if (n === 0 || n === 1) return 1;
  let answer = 1;
  for (let i = n; i > 0; i--) {
    answer *= i;
  }

  return answer;
};

/**
 * Finds factorial of n by recursion
 * @param {number} n
 */
const factorialRecur = (n) => {
  if (n === 0 || n === 1) return 1;
  return n * factorialRecur(n - 1);
};

module.exports = {
  factorialIter,
  factorialRecur
};
