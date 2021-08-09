#!/usr/bin/env node
const { writeFile } = require('fs-extra');
const prettier = require('prettier');
const path = require('path');
const { Command } = require('commander');
const packageJson = require('./package.json');

let interfaces = {};

const identifyType = (value, key) => {
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
    const subInterface = Object.keys(value)
      .map((key) => `${key}: ${identifyType(value[key], key)}`)
      .join(';\n');

    if (!key) {
      console.warn('No key');
    }

    interfaces[key] = subInterface;

    return `
      {
        ${subInterface}
      }`;
  }
};

/**
 * Format a code string with the specified options
 * @param {string} codeStr String of code to format with prettier
 * @param {Record<string, unknown>} prettierConfig Prettier config options
 * @returns
 */
const prettifyCode = (codeStr, prettierConfig = {}) => {
  return prettier.format(codeStr, {
    parser: 'babel',
    ...prettierConfig,
  });
};

/**
 * Derive a TypeScript interface from a JavaScript object
 * @param {Record<string, unknown>} object
 * @param {string} interfaceName Name for the generated interface
 * @param {boolean} formatCode If the code should be prettified or not
 * @returns {Promise<string>}
 */
const deriveInterfaceFromObject = async (
  object,
  interfaceName = 'MyInterface',
  formatCode = true,
) => {
  const code = await identifyType(object, interfaceName);

  if (!formatCode) {
    return code;
  }

  let formattedCode = code;

  try {
    formattedCode = prettifyCode(`export interface ${interfaceName} ${code}`);
  } catch (error) {
    console.error('Error formatting code. Trying to save anyways', error);
  }

  return formattedCode;
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

      const formattedCode = await deriveInterfaceFromObject(
        objectToDeriveFrom,
        interfaceName,
        true,
      );

      if (!outputFile) {
        return console.log(formattedCode);
      }

      const resolvedOutputFilePath = path.join(process.cwd(), outputFile);
      await writeFile(resolvedOutputFilePath, formattedCode);

      console.log(interfaces);
    });

  program.parse(process.argv);
}

module.exports = {
  deriveInterfaceFromObject,
  prettifyCode,
};
