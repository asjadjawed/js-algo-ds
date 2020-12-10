const { fibRecur } = require("./memoize");

test("Fib function is defined", () => {
  expect(typeof fibRecur).toEqual("function");
});

test("calculates correct fib value for 1", () => {
  expect(fibRecur(1)).toEqual(1);
});

test("calculates correct fib value for 2", () => {
  expect(fibRecur(2)).toEqual(1);
});

test("calculates correct fib value for 3", () => {
  expect(fibRecur(2)).toEqual(1);
});

test("calculates correct fib value for 4", () => {
  expect(fibRecur(4)).toEqual(3);
});

test("calculates correct fib value for 15", () => {
  expect(fibRecur(39)).toEqual(63245986);
});
