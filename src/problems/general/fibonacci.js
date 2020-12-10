const fib = (n) => {
  let a = 0;
  let b = 1;
  let count = 1;

  if (n === 0) return a;
  if (n === 1) return b;

  while (count <= n) {
    [a, b] = [b, a + b];
    count++;
  }
  return a;
};

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

const fibCalc = (n) => {
  if (n < 2) return n;
  return fibRecur(n - 1) + fibRecur(n - 2);
};

const fibRecur = memoize(fibCalc);

module.exports = {
  fib,
  fibRecur,
};
