const { jumpingOnClouds } = require("./cloudJump");

test("Cloud Jumps", () => {
  expect(jumpingOnClouds([0, 0, 1, 0, 0, 1, 0])).toBe(4);
  expect(jumpingOnClouds([0, 0, 0, 1, 0, 0])).toBe(3);
});
