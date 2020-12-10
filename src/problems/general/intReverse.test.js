const { intReverseSilly, intReverse } = require("./intReverse");

test("reverse an integer", () => {
  expect(intReverseSilly(0)).toEqual(0);
  expect(intReverseSilly(1)).toEqual(1);
  expect(intReverseSilly(100)).toEqual(1);
  expect(intReverseSilly(123)).toEqual(321);
  expect(intReverseSilly(-293)).toEqual(-392);
  expect(intReverseSilly(-90)).toEqual(-9);
});

test("reverse an integer", () => {
  expect(intReverse(0)).toEqual(0);
  expect(intReverse(1)).toEqual(1);
  expect(intReverse(123)).toEqual(321);
  expect(intReverse(100)).toEqual(1);
  expect(intReverse(-293)).toEqual(-392);
  expect(intReverse(-90)).toEqual(-9);
});
