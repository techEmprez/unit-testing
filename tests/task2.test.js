const reverseString = require('../task2');


test('expected reverse string to be for choice', () => {
  //Arrange
  const str = 'eciohc';
  // Act 
  const reverseStr = reverseString(str);
  //Assert
  expect(reverseStr).toBe('choice');
});