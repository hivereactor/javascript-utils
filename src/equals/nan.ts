/**
 * Checks if the passed number is `NaN` value.
 * Polyfills `Number.isNaN()`.
 *
 * @param {number} a
 * @return {boolean}
 */

export function nan(a: number): boolean {
    return typeof a === "number" && isNaN(a);
}
