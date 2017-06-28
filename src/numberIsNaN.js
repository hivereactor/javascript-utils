/**
 * Checks if the passed number is `NaN` value.
 * This serves as a polyfill for the `Number.isNaN()`.
 *
 * @flow
 * @param {number} a – The passed number.
 * @return {boolean} – `true` if `a` equals to `NaN`.
 */

export function numberIsNaN(a: number): boolean {
  return typeof a === "number" && isNaN(a);
}
