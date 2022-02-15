/**
 * https://www.hackerrank.com/challenges/counting-valleys/problem
 *
 * Complete the countingValleys function in the editor below. It must return an integer that denotes the number of valleys Gary traversed.
 * countingValleys has the following parameter(s):
 * @param {number} n: n - REMOVED. the number of steps Gary takes
 * @param {string} s: a string describing his path
 */
const countingValleys = (s) => {
  if (!s) return 0;

  let elevation = 0;
  let valleys = 0;
  let inValley = false;

  for (const c of s) {
    if (c === 'D') elevation--;
    else elevation++;

    if (!inValley && elevation < 0) {
      valleys++;
      inValley = true;
    }

    if (inValley && elevation >= 0) inValley = false;
  }

  return valleys;
};

module.exports = {
  countingValleys
};
