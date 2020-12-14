const { factorialIter, factorialRecur } = require("./factorial");

test("Find factorial by iteration", () => {
  expect(factorialIter(0)).toBe(1);
  expect(factorialIter(1)).toBe(1);
  expect(factorialIter(2)).toBe(2);
  expect(factorialIter(3)).toBe(6);
  expect(factorialIter(4)).toBe(24);
  expect(factorialIter(5)).toBe(120);
});

test("Find factorial by iteration", () => {
  expect(factorialRecur(0)).toBe(1);
  expect(factorialRecur(1)).toBe(1);
  expect(factorialRecur(2)).toBe(2);
  expect(factorialRecur(3)).toBe(6);
  expect(factorialRecur(4)).toBe(24);
  expect(factorialRecur(5)).toBe(120);
});
