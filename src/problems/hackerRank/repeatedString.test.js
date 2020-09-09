const { repeatedString } = require("./repeatedString");

test("'a' repeats in infinite string", () => {
  expect(repeatedString("a", 1000000000000)).toBe(1000000000000);
  expect(repeatedString("aba", 10)).toBe(7);
});
