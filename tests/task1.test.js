const stringLength = require('../task1');

test('expected length for achraf to be 6', () => {
  expect(stringLength('achraf')).toBe(6);
})

test('expected to throw Error', () => {
  expect(() => {stringLength('microverse123')}).toThrow();
})