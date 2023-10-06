#!/usr/bin/env node
import { writeFile } from 'fs-extra';
import * as path from 'path';
import { Command } from 'commander';
import { deriveInterfaceFromObject } from './deriveInterface';

const deriveInterface = async (
  inputFilePath: string,
  importName: string,
  outputFile: string,
  interfaceName: string,
  subInterfaces: boolean,
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
};

const main = () => {
  const program = new Command();

  program
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
        await deriveInterface(inputFilePath, importName, outputFile, interfaceName, subInterfaces);
      },
    );

  program.parse(process.argv);
};

if (require.main === module) {
  main();
}

export { deriveInterfaceFromObject };
