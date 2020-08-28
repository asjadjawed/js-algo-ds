/**
 * Finding a relation between multiple values in a array
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

module.exports = {
  sumZero,
};
