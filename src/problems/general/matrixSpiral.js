const makeEmptyGrid = (n) => {
  const emptyGrid = [];
  for (let i = 0; i < n; i++) {
    emptyGrid.push([]);
  }
  return emptyGrid;
};

const spiralMatrix = (n) => {
  const result = makeEmptyGrid(n);
  const limits = {
    startRow: 0,
    endRow: n - 1,
    startCol: 0,
    endCol: n - 1
  };

  const cursor = [0, 0];
  let counter = 1;

  while (counter <= n * n) {
    // going right
    if (cursor[0] === limits.startRow && cursor[1] <= limits.endCol) {
      for (; cursor[1] <= limits.endCol; cursor[1]++) {
        result[cursor[0]][cursor[1]] = counter;
        counter++;
      }
      limits.startRow++;
      cursor[0] = limits.startRow;
      cursor[1] = limits.endCol;
    }

    // going down
    if (cursor[1] === limits.endCol && cursor[0] <= limits.endRow) {
      for (; cursor[0] <= limits.endRow; cursor[0]++) {
        result[cursor[0]][cursor[1]] = counter;
        counter++;
      }
      limits.endCol--;
      cursor[0] = limits.endRow;
      cursor[1] = limits.endCol;
    }

    // going left
    if (cursor[1] === limits.endCol && cursor[0] === limits.endRow) {
      for (; cursor[1] >= limits.startCol; cursor[1]--) {
        result[cursor[0]][cursor[1]] = counter;
        counter++;
      }
      limits.endRow--;
      cursor[0] = limits.endRow;
      cursor[1] = limits.startCol;
    }

    //going up
    if (cursor[0] === limits.endRow && cursor[1] < limits.startRow) {
      for (; cursor[0] >= limits.startRow; cursor[0]--) {
        result[cursor[0]][cursor[1]] = counter;
        counter++;
      }
      limits.startCol++;
      cursor[0] = limits.startRow;
      cursor[1] = limits.startCol;
    }
  }

  return result;
};

module.exports = { spiralMatrix, makeEmptyGrid };
