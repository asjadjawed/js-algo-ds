const bc = require("./backspaceCompare");

test("compare backspace strings", () => {
  expect(bc("az", "az")).toBe(true);
  expect(bc("ab#z", "az#z")).toBe(true);
  expect(bc("abc#d", "acc#c")).toBe(false);
  expect(bc("x#y#z#", "a#")).toBe(true);
  expect(bc("a###b", "b")).toBe(true);
  expect(bc("Ab#z", "ab#z")).toBe(false);
  expect(bc("ab##", "c#d#")).toBe(true);
});
