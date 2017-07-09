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

import { numberIsNaN } from "./numberIsNaN";

export function isEmpty(a: any): boolean {
  if (typeof a === "object") {
    // typeof null => "object"
    if (a === null) return true;

    // Get the first key, reassign it and break the loop
    // If there are no keys, it doesn't do anything
    let key = undefined;
    for (key in a) break;

    return key === undefined;
  }

  return a === undefined || a === "" || numberIsNaN(a);
}
