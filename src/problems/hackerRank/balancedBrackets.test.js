const isBalanced = require('./balancedBrackets');

test('Check if brackets are balanced', () => {
  expect(isBalanced('')).toBe(false);
  expect(isBalanced('(')).toBe(false);
  expect(isBalanced('{[()]}')).toBe(true);
  expect(isBalanced('{[(])}')).toBe(false);
  expect(isBalanced('{{[[(())]]}}')).toBe(true);
  expect(isBalanced('{{([])}}')).toBe(true);
  expect(isBalanced('{{)[](}}')).toBe(false);
  expect(isBalanced('{(([])[])[]}')).toBe(true);
  expect(isBalanced('{(([])[])[]]}')).toBe(false);
  expect(isBalanced('{(([])[])[]}[]')).toBe(true);
});
