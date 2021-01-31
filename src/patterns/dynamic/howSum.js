// same as for canSum problem but it returns the elements

const howSum = (t, numbers, memo = {}) => {
  if (t in memo) return memo[t];
  if (t === 0) return [];
  if (t < 0) return null;

  for (let n of numbers) {
    const result = howSum(t - n, numbers, memo);
    if (result) {
      memo[t] = [...result, n];
      return memo[t];
    }
  }

  memo[t] = null;
  return null;
};

module.exports = howSum;
