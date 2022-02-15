const {
  collectOddValues,
  collectOddValuesParam,
  collectOddValuesPure
} = require('./recursionPatterns');

test('Return odd values - helper version', () => {
  expect(collectOddValues([-3])).toEqual([-3]);
  expect(collectOddValues([2])).toEqual([]);
  expect(collectOddValues([])).toEqual([]);
  expect(collectOddValues([1, 2, 3])).toEqual([1, 3]);
  expect(collectOddValues([1, 2, 3, 4, 5, 6, 7, 8, 9])).toEqual([
    1, 3, 5, 7, 9
  ]);
});

test('Return odd values - helper version', () => {
  expect(collectOddValuesParam([-3])).toEqual([-3]);
  expect(collectOddValuesParam([2])).toEqual([]);
  expect(collectOddValuesParam([])).toEqual([]);
  expect(collectOddValuesParam([1, 2, 3])).toEqual([1, 3]);
  expect(collectOddValuesParam([1, 2, 3, 4, 5, 6, 7, 8, 9])).toEqual([
    1, 3, 5, 7, 9
  ]);
});

test('Return odd values - pure version', () => {
  expect(collectOddValuesPure([-3])).toEqual([-3]);
  expect(collectOddValuesPure([2])).toEqual([]);
  expect(collectOddValuesPure([])).toEqual([]);
  expect(collectOddValuesPure([1, 2, 3])).toEqual([1, 3]);
  expect(collectOddValuesPure([1, 2, 3, 4, 5, 6, 7, 8, 9])).toEqual([
    1, 3, 5, 7, 9
  ]);
});
