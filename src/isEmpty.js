/**
 * Checks if the passed value is empty.
 * Returns `true` if either:
 * – An [array] or {object} is empty.
 * – `null` has been passed.
 * – `NaN` has been passed.
 * – Empty string (`""`) was passed.
 *
 * @flow
 * @param {*} a – The passed value.
 * @return {boolean} – `true` if the following conditions are met.
 */

import { numberIsNaN } from "./";

export function isEmpty(a: mixed): boolean {
  if (typeof a === "object") {
    // typeof null => "object"
    if (a === null) return true;

    // Get the first key, reassign it and break the loop
    // If there are no keys, it doesn't do anything
    let key = undefined;
    for (key in a) break;

    return key === undefined;
  }

  if (numberIsNaN(a) || a === "") return true;
  
  return false;
}
