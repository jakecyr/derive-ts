import { identifyType } from './identifyType';

/**
 * Derive a TypeScript interface from a JavaScript object
 * @param {Record<string, unknown>} object
 * @param {string} interfaceName Name for the generated interface
 * @param {boolean} formatCode If the code should be prettified or not
 * @returns {string} The interface derived from the example object.
 */
export const deriveInterfaceFromObject = (
  object: any,
  interfaceName: string = 'MyInterface',
  subInterfaces: boolean = false,
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

  return allCode;
};
