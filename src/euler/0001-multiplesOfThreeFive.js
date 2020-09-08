/**
 * Finds the sum of all the multiples of 3 or 5 below n. O(n)
 *
 * @param {number} n
 */
const multiples35 = (n) => {
  let sum = 0;

  for (let i = 3; i < n; i += 3) sum += i;
  for (let i = 5; i < n; i += 5) if (i % 3 !== 0) sum += i;

  return sum;
};

/**
 * Finds the sum of all the multiples of 3 or 5 below n. O(1)
 *
 * @param {number} n
 */
const multiples35Faster = (n) => {
  const a = Math.floor((n - 1) / 3);
  const b = Math.floor((n - 1) / 5);
  const c = Math.floor((n - 1) / 15);

  return (
    Math.floor((3 * (a * (a + 1))) / 2) +
    Math.floor((5 * (b * (b + 1))) / 2) -
    Math.floor((15 * (c * (c + 1))) / 2)
  );
};

module.exports = { multiples35, multiples35Faster };
