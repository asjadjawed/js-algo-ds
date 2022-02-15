const { sockMerchant } = require('./sockMerchant');

test('SockMerchant', () => {
  expect(sockMerchant(0, [])).toBe(0);
  expect(sockMerchant(5, [1, 1, 1, 1, 1])).toBe(2);
  expect(sockMerchant(6, [1, 2, 3, 1, 2, 3])).toBe(3);
  expect(sockMerchant(7, [1, 2, 1, 2, 1, 3, 2])).toBe(2);
  expect(sockMerchant(9, [10, 20, 20, 10, 10, 30, 50, 10, 20])).toBe(3);
  expect(sockMerchant(10, [1, 1, 3, 1, 2, 1, 3, 3, 3, 3])).toBe(4);
});
