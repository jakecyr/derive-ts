// @ts-check
const { startCase, toLower } = require('lodash');
const prettier = require('prettier');

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
 * @param {*} key
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

    return `${identifyType(value[0], key, interfaces)}[]`;
  } else if (value === undefined || value === null) {
    return 'unknown';
  } else {
    const interfaceName = pascalCase(key);

    const subInterface = Object.entries(value)
      .map(([key, subValue]) => `${key}: ${identifyType(subValue, key, interfaces)}`)
      .join(';\n');

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
  pascalCase,
  identifyType,
  prettifyCode,
};
