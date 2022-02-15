/**
 * @param {string} s
 * @return {number}
 */
const lengthOfLongestSubstring = function (s) {
  if (s.length <= 1) return s.length;

  let i = 0;
  let j = 0;
  let maxSubLen = 0;

  let hash = {
    [s[i]]: i,
    [s[j]]: j
  };

  while (j < s.length) {
    maxSubLen = Math.max(j - i + 1, maxSubLen);

    if (!(s[j + 1] in hash)) {
      if (s[j + 1] === undefined) break;
      j++;
      hash[s[j]] = j;
    } else if (s[j + 1] in hash && hash[s[j + 1]] < i) {
      delete hash[s[j + 1]]; // deleting stale data, left of outside of sliding window;
    } else {
      i = hash[s[j + 1]] + 1;
      j++;
      hash[s[i]] = i;
      hash[s[j]] = j;
    }
  }

  return maxSubLen;
};

module.exports = lengthOfLongestSubstring;
