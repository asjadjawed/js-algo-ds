const twoSum = require('./twoSum');

describe('get indexes of 2 elements that add to target ', () => {
  test('test the two sum function', () => {
    expect(twoSum([], 1)).toBeNull();
    expect(twoSum([5], 5)).toBeNull();
    expect(twoSum([1, 3, 7, 9, 2], 25)).toBeNull();
    expect(twoSum([1, 6], 7)).toEqual([0, 1]);
    expect(twoSum([1, 3, 7, 9, 2], 11)).toEqual([3, 4]);
    expect(twoSum([2, 7, 11, 15], 9)).toEqual([0, 1]);
  });
});
