import { format as prettierFormat } from 'prettier';

/**
 * Format a code string with the specified options.
 * @param codeStr String of code to format with prettier.
 * @param  prettierConfig Prettier config options.
 * @returns Formatted code.
 */
export const prettifyCode = (codeStr: string, prettierConfig: Record<string, unknown> = {}) => {
  return prettierFormat(codeStr, {
    parser: 'babel',
    ...prettierConfig,
  });
};
