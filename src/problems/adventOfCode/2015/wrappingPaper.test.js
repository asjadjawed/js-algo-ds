const { join } = require("path");
const { getArea, totals, getRibbon } = require("./wrappingPaper");

test("wrapping paper area", () => {
  expect(getArea([2, 3, 4])).toEqual(58);
  expect(getArea([1, 1, 10])).toEqual(43);
});

test("total paper", () => {
  expect(totals(join(__dirname, "wrappingPaper.data.txt"), getArea)).toEqual(
    1586300
  );
});

test("ribbon length", () => {
  expect(getRibbon([2, 3, 4])).toEqual(34);
  expect(getRibbon([1, 1, 10])).toEqual(14);
});

test("total ribbon", () => {
  expect(totals(join(__dirname, "wrappingPaper.data.txt"), getRibbon)).toEqual(
    3737498
  );
});
