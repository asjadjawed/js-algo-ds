// number of ways to travel through a grid (m x n) starting from top left
// going to bottom right, can only move down or right

const gridTraveler = (m, n, memo = {}) => {
  const key = `${m},${n}`;
  if (key in memo) return memo[key];
  if (m === 0 || n === 0) return 0;
  if (m === 1 || n === 1) return 1;
  memo[key] = gridTraveler(m - 1, n, memo) + gridTraveler(m, n - 1, memo);
  memo[`${n},${m}`] = memo[key];
  return memo[key];
};

module.exports = gridTraveler;
