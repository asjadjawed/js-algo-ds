/**
 * Set of problems using the frequency counter pattern
 * Used for comparison of 2 objects
 * This way we can avoid nested loop and go from O(n^2) to O(n)
 */

/**
 * Returns true if every value in array1 has a squared corresponding value in array2
 * @param {Array} arr1
 * @param {Array} arr2
 */
const squaredArrayCheck = (arr1, arr2) => {
  if (!arr1 || !arr2) throw new Error("Invalid Argument!");
  if (arr1.length != arr2.length) return false;

  const numFrequency = {};

  for (const n of arr1) {
    numFrequency[n * n] ? numFrequency[n * n]++ : (numFrequency[n * n] = 1);
  }

  for (const n of arr2) {
    if (!numFrequency[n]) return false;
    numFrequency[n] === 1 ? delete numFrequency[n] : numFrequency[n]--;
  }

  return true;
};

/**
 * Checks if str1 is an anagram of str2
 * @param {string} str1
 * @param {string} str2
 */
const validAnagram = (str1, str2) => {
  if (str1 === "" && str2 === "") return true;
  if (!str1 || !str2) throw new Error("Invalid Argument!");
  if (str1.length != str2.length) return false;

  const charFrequency = {};

  for (const c of str1) {
    charFrequency[c] ? charFrequency[c]++ : (charFrequency[c] = 1);
  }

  for (const c of str2) {
    if (!charFrequency[c]) return false;
    charFrequency[c] === 1 ? delete charFrequency[c] : charFrequency[c]--;
  }

  return true;
};

module.exports = {
  squaredArrayCheck,
  validAnagram,
};
