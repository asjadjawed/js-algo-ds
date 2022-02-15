const { check } = require('./main');

test('Jest Check', () => {
  expect(check()).toEqual('JestTest');
});
