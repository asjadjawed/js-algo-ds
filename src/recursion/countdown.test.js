const { countdown } = require("./countdown");

test("console.log - test", () => {
  console.log = jest.fn();
  countdown(5);

  expect(console.log.mock.calls[0][0]).toBe(5);
  expect(console.log.mock.calls[1][0]).toBe(4);
  expect(console.log.mock.calls[2][0]).toBe(3);
  expect(console.log.mock.calls[3][0]).toBe(2);
  expect(console.log.mock.calls[4][0]).toBe(1);
  expect(console.log.mock.calls[5][0]).toBe(0);
});

test("console.log - test", () => {
  expect(countdown(-100)).toBeUndefined();
});
