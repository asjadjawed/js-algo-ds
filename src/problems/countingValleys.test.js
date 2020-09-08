const { countingValleys } = require("./countingValleys");

test("Count the valleys", () => {
  expect(countingValleys()).toBe(0);
  expect(countingValleys("")).toBe(0);
  expect(countingValleys("UDDDUDUU")).toBe(1);
  expect(countingValleys("DDUUDDUDUUUD")).toBe(2);
  expect(countingValleys("DDDDDDDDDDDDDDDDDDDD")).toBe(1);
  expect(countingValleys("UUUUUUUUUUUUUUUUUUUU")).toBe(0);
  expect(countingValleys("DUDUDUDU")).toBe(4);
  expect(countingValleys("UUDDDUUUDDDDUUUUUU")).toBe(2);
});
