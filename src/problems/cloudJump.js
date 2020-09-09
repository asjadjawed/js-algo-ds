/**
 * https://www.hackerrank.com/challenges/jumping-on-the-clouds/problem
 *
 * Complete the jumpingOnClouds function in the editor below. It should return the minimum number of jumps required, as an integer.
 * jumpingOnClouds has the following parameter(s):
 * c: an array of binary integers
 *
 * @param {number[]} c
 */
const jumpingOnClouds = (c) => {
  let jumps = 0;
  let i = 0;
  while (i < c.length - 1) {
    if (c[i + 2] !== 1) {
      jumps++;
      i += 2;
    } else {
      jumps++;
      i++;
    }
  }
  return jumps;
};

module.exports = {
  jumpingOnClouds,
};
