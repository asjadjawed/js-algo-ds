// check if any of the numbers in array (all positive) can add up to target, t
// number can be used repeatedly

const canSum = (t, numbers, memo = {}) => {
  if (t in memo) return memo[t];
  if (t === 0) return true;
  if (t < 0) return false; // this gets discarded in recursion

  for (let n of numbers) {
    memo[t] = canSum(t - n, numbers, memo);
    if (memo[t]) return true; // the actual return when all recursion is done, it only checks true, ignores false
  }

  memo[t] = false; // we also need to memoize where t can't be reached
  return false; // if the for loop misses everything false returns
};

module.exports = canSum;
