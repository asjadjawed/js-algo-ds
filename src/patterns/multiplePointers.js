/**
 * Finding a relation between multiple values in a (sorted / arranged) array or more info on the array / values
 * Multiple pointers are assigned that move towards the end or start or towards each other
 * based on the values they are pointing at
 */

/**
 * Find the first pair whose sum is zero in a sorted array
 * @param {Array} arr
 */
const sumZero = (arr) => {
  if (!arr || arr.length <= 1) return undefined;
  let leftPointer = 0;
  let rightPointer = arr.length - 1;

  while (leftPointer !== rightPointer) {
    if (arr[leftPointer] + arr[rightPointer] === 0)
      return [arr[leftPointer], arr[rightPointer]];

    arr[leftPointer] + arr[rightPointer] < 0 ? leftPointer++ : rightPointer--;
  }
};

/**
 * Counts unique values in an array
 * @param {Array} arr
 */
const countUnique = (arr) => {
  if (!arr) throw new Error('Invalid Argument!');
  if (arr.length === 0) return 0;
  if (arr.length === 1) return 1;

  let firstPointer = 0;
  let secondPointer = 1;
  let count = 1;

  while (secondPointer < arr.length) {
    if (arr[firstPointer] === arr[secondPointer]) secondPointer++;
    else {
      count++;
      firstPointer = secondPointer;
      secondPointer++;
    }
  }

  return count;
};

module.exports = {
  sumZero,
  countUnique
};
