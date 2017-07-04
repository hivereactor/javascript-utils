/**
 * Checks if the passed value is an object literal (`{}`).
 *
 * @param {object} a – The passed value.
 * @return {boolean} – `true` if the passed value is an object literal.
 */

export function isObjectLiteral(a: object): boolean {
  // handle null
  if (a === null) return false;

  return typeof a === "object" && a.constructor === Object;
}