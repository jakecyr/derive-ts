import { startCase, toLower } from 'lodash';

/**
 * Convert a string to Pascal Case (TitleCase)
 * @param {string} str String to convert to Pascal case
 * @returns {string} Converted string
 */
export const pascalCase = (str) => {
  return startCase(toLower(str)).replace(/\s/g, '');
};
