const MaxBH = require('./MaxBinaryHeap');

describe('Test for Max Binary Heap insert and remove', () => {
  let maxBH;

  beforeEach(() => {
    maxBH = new MaxBH();

    maxBH.insert(41);
    maxBH.insert(39);
    maxBH.insert(33);
    maxBH.insert(18);
    maxBH.insert(27);
    maxBH.insert(12);
    maxBH.insert(55);
  });

  test('Insert into Heap', () => {
    maxBH.insert(1);
    maxBH.insert(45);
    maxBH.insert(199);
    expect(maxBH.data).toEqual([199, 55, 41, 39, 45, 12, 33, 1, 18, 27]);
  });

  test('remove from heap', () => {
    expect(maxBH.remove()).toEqual(55);
    expect(maxBH.data).toEqual([41, 39, 33, 18, 27, 12]);
    expect(maxBH.remove()).toEqual(41);
    expect(maxBH.data).toEqual([39, 27, 33, 18, 12]);
    expect(maxBH.remove()).toEqual(39);
    expect(maxBH.remove()).toEqual(33);
    expect(maxBH.remove()).toEqual(27);
    expect(maxBH.remove()).toEqual(18);
    expect(maxBH.remove()).toEqual(12);
    expect(maxBH.data).toEqual([]);
  });
});
