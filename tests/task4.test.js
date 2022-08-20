const capitalize = require('../task4');

test('expected the string to be capitalized = "Choice" ', () => {
  //Arrange
  const str = 'choice';
  //Act 
  const capitalizedStr = capitalize(str);
  //Assert
  expect(capitalizedStr).toBe('Choice');
})