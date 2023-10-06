import { deriveInterfaceFromObject } from '../dist/deriveInterface';
import exampleObject from './example';
import * as fs from 'fs';
import { prettifyCode } from '../dist/prettifyCode';

describe('test example', () => {
  it('produces the correct interface', async () => {
    const derivedInterface = await deriveInterfaceFromObject(
      exampleObject.example,
      'LocationSearch',
      true,
    );
    const prettifiedCode = prettifyCode(derivedInterface);
    const expectedInterface = fs.readFileSync('./examples/expected.ts').toString();

    expect(prettifiedCode).toEqual(expectedInterface);
  });
});
