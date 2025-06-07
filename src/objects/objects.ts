/**
 * Utility functions for working with objects.
 */

/**
 * Checks if an object is empty (has no own properties).
 * @param obj - The object to check.
 * @returns `true` if the object is empty, `false` otherwise.
 */
export const isEmptyObject = (obj: Record<string, unknown> = {}) => {
  return obj.constructor === Object && !Object.entries(obj).length
}
