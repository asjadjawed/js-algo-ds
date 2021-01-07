// https://leetcode.com/problems/two-sum/

const twoSum = (arr, t) => {
  const hash = {};
  if (arr.length < 2) return null;

  for (let i = 0; i < arr.length; i++) {
    const number = arr[i];
    const remainder = t - number;
    hash[remainder] = i;
    if (number in hash) return [hash[number], i];
  }

  return null;
};

module.exports = twoSum;
