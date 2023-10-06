import { pascalCase } from '../src/textFormatters';

describe('pascalCase', () => {
  it('converts a string to pascal case', () => {
    expect(pascalCase('this is lowercase :(')).toEqual('ThisIsLowercase');
    expect(pascalCase('test')).toEqual('Test');
    expect(pascalCase('1')).toEqual('1');
  });
});
