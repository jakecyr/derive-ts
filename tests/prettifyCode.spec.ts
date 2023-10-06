import { prettifyCode } from '../src/prettifyCode';

describe('prettifyCode', () => {
  it('formats code as expected', () => {
    const codeToFormat = `const a=(b,c)=>b+c;`;
    const expectedResult = `const a = (b, c) => b + c;\n`;
    const result = prettifyCode(codeToFormat);

    expect(result).toEqual(expectedResult);
  });
});
