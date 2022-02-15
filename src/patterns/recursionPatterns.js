/**
 * Returns odd values in an array (Helper Recursion)
 * (Can also be done by passing the answer as a parameter to the recursive function)
 * @param {number[]} arr
 */
const collectOddValues = (arr) => {
  let result = [];

  const helper = (helperInput) => {
    if (helperInput.length === 0) return;
    if (helperInput[0] % 2 !== 0) result.push(helperInput[0]);

    helper(helperInput.slice(1));
  };

  helper(arr);

  return result;
};

/**
 * Returns odd values in an array (Default params pattern)
 * Collect odd values - uses params to carry value
 * @param {number[]} arr
 */
const collectOddValuesParam = (arr, result = []) => {
  if (arr.length === 0) return [];
  if (arr[0] % 2 !== 0) result.push(arr[0]);

  return result.concat(collectOddValuesPure(arr.slice(1)));
};

/**
 * Returns odd values in an array
 * Collect odd values - pure recursion alternate
 * @param {number[]} arr
 */
const collectOddValuesPure = (arr) => {
  let newArr = [];

  if (arr.length === 0) return [];
  if (arr[0] % 2 !== 0) newArr.push(arr[0]);

  newArr = newArr.concat(collectOddValuesPure(arr.slice(1)));
  return newArr;
};

collectOddValues([1, 2, 3, 4, 5]);

module.exports = {
  collectOddValues,
  collectOddValuesPure,
  collectOddValuesParam
};
