/**
 * Checks if the passed value equals NaN.
 *
 * @param {number} a
 * @return {boolean}
 */

export function nan(a: number): boolean {
    return typeof a === "number" && isNaN(a);
}
