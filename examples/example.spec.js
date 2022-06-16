const { deriveInterfaceFromObject } = require('../index');
const exampleObject = require('./example');
const fs = require('fs');

describe('test example', () => {
  it('produces the correct interface', async () => {
    const derivedInterface = await deriveInterfaceFromObject(
      exampleObject.example,
      'LocationSearch',
      true,
    );

    const expectedInterface = fs.readFileSync('./examples/expected.ts').toString();

    expect(derivedInterface).toEqual(expectedInterface);
  });
});
