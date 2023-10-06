import { pascalCase } from './textFormatters';

/**
 *  Derive a type from a value (usually start with an object)
 * @param {string | number | boolean | unknown[] | Record<string, unknown> | unknown} value
 * @param {string} key
 * @param {*} interfaces
 * @returns
 */
export const identifyType = (value: any, key?: string, interfaces?: any) => {
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
