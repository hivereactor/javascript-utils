import { numberIsNaN } from "./numberIsNaN";

/**
 * Checks if the passed value is empty.
 * Returns `true` if either:
 * – An [array] or an {object} is empty.
 * – An empty string (`""`) has been passed.
 * - `null`, `NaN` or `undefined` has been passed.
 *
 * @param {*} a – The passed value.
 * @return {boolean} – `true` if the conditions above are met.
 */

export function isEmpty(a: any): boolean {
  if (typeof a === "object") {
    // typeof null => "object"
    if (a === null) return true;

    for (let b in a) return false;
    return true;
  }

  return !a && a !== 0;
}
