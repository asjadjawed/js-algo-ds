/**
 * Reverse an integer
 *
 * @param {number} int
 */
const intReverseSilly = (int) => {
  return Math.sign(int) * parseInt(int.toString().split("").reverse().join(""));
};

/**
 * Reverses an integer without string conversion
 *
 * @param {number} int
 */
const intReverse = (int) => {
  if (Math.abs(int) < 10) return int;

  const parity = Math.sign(int);

  let answer = 0;
  int = Math.abs(int);
  while (int !== 0) {
    answer = answer * 10 + (int % 10);
    int = Math.floor(int / 10);
  }

  return parity * answer;
};

module.exports = {
  intReverseSilly,
  intReverse,
};
