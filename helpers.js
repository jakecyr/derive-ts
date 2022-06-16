// @ts-check
const { startCase, toLower } = require('lodash');
const prettier = require('prettier');

/**
 * Derive a TypeScript interface from a JavaScript object
 * @param {Record<string, unknown>} object
 * @param {string} interfaceName Name for the generated interface
 * @param {boolean} formatCode If the code should be prettified or not
 * @returns {string}
 */
const deriveInterfaceFromObject = (
  object,
  interfaceName = 'MyInterface',
  formatCode = true,
  subInterfaces = false,
) => {
  const interfaces = {};
  const interfaceCode = identifyType(object, null, subInterfaces ? interfaces : null);
  const fullInterface = `export interface ${interfaceName} ${interfaceCode}`;
  let allCode = null;

  if (subInterfaces) {
    allCode =
      `
      ${Object.keys(interfaces)
        .map(
          (key) => `
        export interface ${key} {
          ${interfaces[key]}
        }
      `,
        )
        .join('\n')}
    ` + fullInterface;
  } else {
    allCode = fullInterface;
  }

  if (!formatCode) {
    return allCode;
  }

  try {
    return prettifyCode(allCode);
  } catch (error) {
    console.error('Error formatting code. Trying to save anyways', error);
  }
};

/**
 * Convert a string to Pascal Case (TitleCase)
 * @param {string} str String to convert to Pascal case
 * @returns {string} Converted string
 */
const pascalCase = (str) => {
  return startCase(toLower(str)).replace(/\s/g, '');
};

/**
 *  Derive a type from a value (usually start with an object)
 * @param {string | number | boolean | unknown[] | Record<string, unknown> | unknown} value
 * @param {string} key
 * @param {*} interfaces
 * @returns
 */
const identifyType = (value, key, interfaces) => {
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

    const types = {};

    value.forEach((v) => {
      const type = identifyType(v, key, interfaces);
      types[type] = true;
    });

    const typesArr = Object.keys(types);
    const type = typesArr.length > 1 ? `(${typesArr.join('|')})` : typesArr[0];

    return `${type}[]`;
  } else if (value === undefined || value === null) {
    return 'unknown';
  } else {
    const interfaceName = pascalCase(key);

    const subInterface = Object.entries(value)
      .map(([key, subValue]) => `${key}: ${identifyType(subValue, key, interfaces)}`)
      .join(';');

    if (interfaces && key) {
      interfaces[interfaceName] = subInterface;
      return interfaceName;
    }

    return `{${subInterface}}`;
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

module.exports = {
  deriveInterfaceFromObject,
  pascalCase,
  identifyType,
  prettifyCode,
};
