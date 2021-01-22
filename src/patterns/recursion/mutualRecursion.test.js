const { alicePlays } = require("./mutualRecursion");

test("two function mutual recursion", () => {
  expect(alicePlays(20)).toEqual("Bob wins!");
});

test("two function mutual recursion", () => {
  expect(alicePlays(1)).toEqual("Alice wins!");
});
