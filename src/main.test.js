const { check } = require("./main");

test("says hi node & ts", () => {
  expect(check()).toEqual("Check");
});
