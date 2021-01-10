function minimumSwaps(arr) {
  let swaps = 0;
  const swap = (i, j) => {
    [arr[i], arr[j]] = [arr[j], arr[i]];
    swaps++;
  };

  for (let i = 0; i < arr.length; i++) {
    let index = i + 1;
    while (index !== arr[i]) {
      swap(i, arr[i] - 1);
    }
  }

  return swaps;
}

module.exports = { minimumSwaps };
