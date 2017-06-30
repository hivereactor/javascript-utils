/**
 * @flow
 */

export function isObjectLiteral(a: {}): boolean {
  // handle null
  if (a === null) return false;

  return typeof a === "object" && a.constructor === Object;
}
