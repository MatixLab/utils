/**
 * Utility functions for generating random values.
 */

/**
 * Returns a random hexadecimal color code.
 * @returns A string representing a random hexadecimal color code.
 */
export const getRandomColor = (): string => {
  return Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, '0')
}

/**
 * Returns a random string of characters.
 * @param length - The desired length of the random string
 * @returns A string representing a random string of characters.
 */
export const getRandomString = (length = 16): string => {
  const chars = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789'
  return Array.from({ length }, () => chars[Math.floor(Math.random() * chars.length)]).join('')
}

/**
 * Generates a random number between the specified minimum and maximum values (inclusive).
 *
 * @param min The minimum value for the random number.
 * @param max The maximum value for the random number.
 * @returns A random number between the specified minimum and maximum values.
 */
export const getRandomNumber = (min: number, max: number) => {
  return Math.floor(Math.random() * (max - min + 1)) + min
}

/**
 * Generate a random string of digits
 * @param length Length of the digits string
 * @returns Random digits string
 */
export const getRandomDigits = (length: number) => {
  return Array.from({ length }, () => Math.floor(Math.random() * 10)).join('')
}

/**
 * Returns a random element from an array.
 *
 * @param array - The array to get a random element from.
 * @returns A random element from the array.
 */
export const getRandomElement = <T>(array: T[]): T => {
  const index = Math.floor(Math.random() * array.length)
  return array[index]!
}

/**
 * Returns a random property value from an object.
 * @param obj - The object to get a random property value from.
 * @returns A random property value from the object.
 */
export const getRandomProperty = <T>(obj: Record<string, T>): T => {
  const keys = Object.keys(obj)
  const randomKey = keys[Math.floor(keys.length * Math.random())]!

  return obj[randomKey]!
}
