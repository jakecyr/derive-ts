const { pascalCase, identifyType } = require('./helpers');

describe('helpers', () => {
  describe('pascalCase', () => {
    it('converts a string to pascal case', () => {
      expect(pascalCase('this is lowercase :(')).toEqual('ThisIsLowercase');
      expect(pascalCase('test')).toEqual('Test');
      expect(pascalCase('1')).toEqual('1');
    });
  });

  describe('identifyType', () => {
    it('identifies strings', () => {
      expect(identifyType('what am i')).toEqual('string');
      expect(identifyType('')).toEqual('string');
    });

    it('identifies numbers', () => {
      expect(identifyType(1)).toEqual('number');
      expect(identifyType(-1)).toEqual('number');
      expect(identifyType(0)).toEqual('number');
    });

    it('identifies boolean', () => {
      expect(identifyType(true)).toEqual('boolean');
      expect(identifyType(false)).toEqual('boolean');
    });

    it('identifies objects', () => {
      expect(identifyType({ name: 'Derive' })).toEqual('{name: string}');
    });

    it('identifies nested objects', () => {
      expect(identifyType({ name: { app: 'Derive', b: { c: 1 } } })).toEqual(
        '{name: {app: string;b: {c: number}}}',
      );
    });

    it('returns unknown if undefined or null', () => {
      expect(identifyType(null)).toEqual('unknown');
      expect(identifyType(undefined)).toEqual('unknown');
    });
  });
});
