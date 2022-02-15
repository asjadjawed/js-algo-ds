const sameFrequency = (n1, n2) => {
  const arr1 = n1.toString().split('');
  const arr2 = n2.toString().split('');
  if (arr1.length !== arr2.length) return false;

  for (const e of arr1) {
    const checkIndex = arr2.indexOf(e);
    if (checkIndex === -1) return false;
    arr2.splice(checkIndex, 1);
  }

  return true;
};

module.exports = sameFrequency;
