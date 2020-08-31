const { stringSearch } = require("./stringSearch");

test("check for substring in string", () => {
  expect(stringSearch("wow", "wow")).toBe(1);
  expect(stringSearch("wow", "ow")).toBe(1);
  expect(stringSearch("wowow", "ow")).toBe(2);
  expect(stringSearch("wowow", "b")).toBe(0);
  expect(stringSearch("apple a day, keeps the doc away", "ay")).toBe(2);
});
