#!/usr/bin/env node
const { writeFile } = require('fs-extra');
const path = require('path');
const { Command } = require('commander');
const packageJson = require('./package.json');
const { deriveInterfaceFromObject } = require('./helpers');

if (require.main === module) {
  const program = new Command();

  program
    .version(packageJson.version)
    .command('derive <jsFilePath>')
    .option('-n, --interface-name <name>', 'Name of the outputted interface')
    .option('-i, --import-name <importNam>', 'Name of the object exported from the specified file')
    .option('-o, --output-file <outputFilePath>', 'File to save the interface to')
    .option('-s, --sub-interfaces', 'Generate sub-interfaces and use in the main interface')
    .action(
      async (
        inputFilePath,
        { interfaceName = 'MyInterface', importName, outputFile, subInterfaces },
      ) => {
        const resolvedInputFilePath = path.join(process.cwd(), inputFilePath);
        let requirePath = path.relative(__dirname, resolvedInputFilePath);

        if (!requirePath.startsWith('.')) {
          requirePath = './' + requirePath;
        }

        const jsFile = require(requirePath);
        let objectToDeriveFrom = null;

        if (importName) {
          objectToDeriveFrom = jsFile[importName];
        } else {
          objectToDeriveFrom = jsFile;
        }

        const formattedCode = deriveInterfaceFromObject(
          objectToDeriveFrom,
          interfaceName,
          true,
          subInterfaces,
        );

        if (!outputFile) {
          return console.log(formattedCode);
        }

        const resolvedOutputFilePath = path.join(process.cwd(), outputFile);
        await writeFile(resolvedOutputFilePath, formattedCode);
      },
    );

  program.parse(process.argv);
}

module.exports = {
  deriveInterfaceFromObject,
};
