// Generic memoization function
const memoize = (fn) => {
  const cache = {};
  return (...args) => {
    if (cache[args]) return cache[args];
    else {
      const result = fn(...args);
      cache[args] = result;
      return result;
    }
  };
};

// the actual slow calculation
let fibRecur = (n) => {
  if (n < 2) return n;
  return fibRecur(n - 1) + fibRecur(n - 2); // these calls are now to the memoized version
};

fibRecur = memoize(fibRecur); // re-assigning the function names so calls are now to the memoized function

module.exports = {
  fibRecur,
};
