#!/usr/bin/env node
const { writeFile } = require('fs-extra');
const prettier = require('prettier');
const path = require('path');
const { Command, parse } = require('commander');
const packageJson = require('./package.json');

const identifyType = (value) => {
  if (typeof value === 'string') {
    return 'string';
  } else if (typeof value === 'number') {
    return 'number';
  } else if (typeof value === 'boolean') {
    return 'boolean';
  } else if (Array.isArray(value)) {
    if (value.length === 0) {
      return 'unknown[]';
    }

    return `${identifyType(value[0])}[]`;
  } else if (value === undefined || value === null) {
    return 'unknown';
  } else {
    return `
      {
        ${Object.keys(value)
          .map((key) => `${key}: ${identifyType(value[key])}`)
          .join(';\n')}
      }`;
  }
};

if (require.main === module) {
  const program = new Command();

  program
    .version(packageJson.version)
    .command('derive <jsFilePath>')
    .option('-n, --interface-name <name>', 'Name of the outputted interface')
    .option('-i, --import-name <importNam>', 'Name of the object exported from the specified file')
    .option('-o, --output-file <outputFilePath>', 'File to save the interface to')
    .action(async (inputFilePath, { interfaceName = 'MyInterface', importName, outputFile }) => {
      const jsFile = require(inputFilePath);
      let objectToDeriveFrom = null;

      if (importName) {
        objectToDeriveFrom = jsFile[importName];
      } else {
        objectToDeriveFrom = jsFile;
      }

      const code = await identifyType(objectToDeriveFrom);

      let formattedCode = code;

      try {
        formattedCode = prettier.format(`export interface ${interfaceName} ${code}`, {
          parser: 'babel',
        });
      } catch (error) {
        console.error('Error formatting code. Trying to save anyways', error);
      }

      if (!outputFile) {
        return console.log(formattedCode);
      }

      await writeFile(path.resolve(outputFile), formattedCode);
    });

  program.parse(process.argv)
}
