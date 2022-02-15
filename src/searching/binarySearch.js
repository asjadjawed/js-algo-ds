/**
 * Binary search for value in sorted array
 * @param {number[]} arr
 * @param {number} value
 */
const binarySearch = (arr, value) => {
  let left = 0;
  let right = arr.length - 1;
  let check = Math.floor((left + right) / 2);

  while (left <= right) {
    if (arr[check] === value) return check;
    else if (arr[check] > value) right = check - 1;
    else left = check + 1;
    check = Math.floor((left + right) / 2);
  }

  return -1;
};

module.exports = {
  binarySearch
};
