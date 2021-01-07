const {
  minimumBribes,
  minimumBribesSlow,
  minimumBribesSwapping,
} = require("./newYearChaos");

test("min no of bribes", () => {
  expect(minimumBribes([2, 1, 5, 3, 4])).toEqual(3);
  expect(minimumBribes([2, 5, 1, 3, 4])).toEqual("Too chaotic");
  expect(minimumBribes([1, 2, 5, 3, 7, 8, 6, 4])).toEqual(7);

  expect(minimumBribesSlow([2, 1, 5, 3, 4])).toEqual(3);
  expect(minimumBribesSlow([2, 5, 1, 3, 4])).toEqual("Too chaotic");
  expect(minimumBribesSlow([1, 2, 5, 3, 7, 8, 6, 4])).toEqual(7);

  expect(minimumBribesSwapping([2, 1, 5, 3, 4])).toEqual(3);
  expect(minimumBribesSwapping([2, 5, 1, 3, 4])).toEqual("Too chaotic");
  expect(minimumBribesSwapping([1, 2, 5, 3, 7, 8, 6, 4])).toEqual(7);
});
