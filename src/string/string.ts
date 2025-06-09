/**
 * Utility functions for working with strings.
 */

/**
 * First letter uppercase, other lowercase
 * @category string
 * @example
 * ```
 * capitalize('hello') => 'Hello'
 * ```
 */
export function capitalize(str: string): string {
   if (typeof str !== 'string') {
    return ''
  }
  if (str.length === 0) {
    return str
  }
  return str[0]?.toUpperCase() + str.slice(1).toLowerCase()
}


/**
 * Uppercases the first character in the `string`.
 * @param string - The string to uppercase the first character of.
 * @returns The string with the first character in uppercase.
 */
export const ucFirst = (str: string) => {
  if (typeof str !== 'string') {
    return ''
  }

  if (str.length === 0) {
    return str
  }

  return str[0]?.toUpperCase() + str.slice(1)
}

/**
 * Lowercases the first character in the `string`.
 * @param string - The string to lowercase the first character of.
 * @returns The string with the first character in lowercase.
 */
export const lcFirst = (str: string) => {
  if (typeof str !== 'string') {
    return ''
  }

  if (str.length === 0) {
    return str
  }

  return str[0]?.toLowerCase() + str.slice(1)
}

/**
 * Replace backslash to slash
 *
 * @category String
 */
export function slash(str: string) {
  return str.replace(/\\/g, '/')
}
