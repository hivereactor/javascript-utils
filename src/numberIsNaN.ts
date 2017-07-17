/**
 * Checks if the passed number is `NaN` value.
 * Polyfills `Number.isNaN()`.
 *
 * @param {number} a – The passed number.
 * @return {boolean} – `true` if `a` is `NaN`.
 */

export function numberIsNaN(a: number): boolean {
  return typeof a === "number" && isNaN(a);
}
