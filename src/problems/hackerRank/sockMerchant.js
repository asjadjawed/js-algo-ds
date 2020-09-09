/**
 * https://www.hackerrank.com/challenges/sock-merchant/problem?h_l=interview&playlist_slugs%5B%5D=interview-preparation-kit&playlist_slugs%5B%5D=warmup
 * Complete the sockMerchant function in the editor below. It must return an integer representing the number of matching pairs of socks that are available.
 * sockMerchant has the following parameter(s):
 * n: the number of socks in the pile
 * ar: the colors of each sock
 */

/**
 * Sock merchant - count number of pairs in the array
 *
 * @param {number} n
 * @param {number[]} ar
 */
const sockMerchant = (n, ar) => {
  const hash = {};
  let pairs = 0;
  for (const s of ar) {
    hash[s] ? hash[s]++ : (hash[s] = 1);
    if (hash[s] % 2 == 0) pairs++;
  }
  return pairs;
};

module.exports = {
  sockMerchant,
};
