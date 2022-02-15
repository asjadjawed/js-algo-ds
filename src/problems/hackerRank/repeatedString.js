/**
 * https://www.hackerrank.com/challenges/repeated-string/
 *
 * Complete the repeatedString function in the editor below. It should return an integer representing the number of occurrences of
 * a in the prefix of length  in the infinitely repeating string.
 * repeatedString has the following parameter(s):
 * s: a string to repeat
 * n: the number of characters to consider
 *
 * @param {string} s
 * @param {number} n
 */
const repeatedString = (s, n) => {
  let count = Math.floor(n / s.length) * s.match(/a/g).length;
  let remainder = s.slice(0, n % s.length);
  count += (remainder.match(/a/g) || []).length;
  return count;
};

module.exports = {
  repeatedString
};
