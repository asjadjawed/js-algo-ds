const { countingValleys } = require("./countingValleys");

test("Count the valleys", () => {
  expect(countingValleys(0, "")).toBe(0);
  expect(countingValleys(8, "UDDDUDUU")).toBe(1);
  expect(countingValleys(12, "DDUUDDUDUUUD")).toBe(2);
  expect(countingValleys(20, "DDDDDDDDDDDDDDDDDDDD")).toBe(1);
  expect(countingValleys(20, "UUUUUUUUUUUUUUUUUUUU")).toBe(0);
  expect(countingValleys(8, "DUDUDUDU")).toBe(4);
  expect(countingValleys(18, "UUDDDUUUDDDDUUUUUU")).toBe(2);
});
