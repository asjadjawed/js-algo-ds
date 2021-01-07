const hourglassSum = (arr) => {
  const sumHG = (i, j) => {
    return (
      arr[i][j] +
      arr[i][j + 1] +
      arr[i][j + 2] + // top
      arr[i + 1][j + 1] + //middle
      arr[i + 2][j] + // bottom
      arr[i + 2][j + 1] +
      arr[i + 2][j + 2]
    );
  };

  let max = sumHG(0, 0);

  for (let x = 0; x < arr.length - 2; x++) {
    for (let y = 0; y < arr.length - 2; y++) {
      const sum = sumHG(x, y);
      if (sum > max) max = sum;
    }
  }

  return max;
};

module.exports = hourglassSum;
