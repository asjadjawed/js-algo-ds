const averagePair = (arr, avg) => {
  if (arr.length < 2) return false;

  const average = (n1, n2) => (n1 + n2) / 2;

  let i = 0;
  let j = 1;

  while (arr) {
    if (average(arr[i], arr[j]) === avg) return true;

    if (average(arr[i], arr[j]) < avg) {
      i++;
      j++;
    } else {
      i--;
    }

    if (i === -1 || j === arr.length) return false;
  }

  return true;
};

module.exports = averagePair;
