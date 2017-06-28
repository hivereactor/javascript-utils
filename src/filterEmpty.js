/**
 * Filters the passed value and returns `undefined` if either:
 * – An [array] or an {object} is empty.
 * – `null` has been passed.
 * – `NaN` has been passed.
 *
 * @flow
 * @param {*} a – The passed data.
 * @return {*|undefined} – Either `undefined` or the passed data.
 */

import { isEmptyObject, numberIsNaN } from "./";

export function filterEmpty(a: mixed): mixed {
  if (typeof a === "object") return !isEmptyObject(a) ? a : undefined;
  if (numberIsNaN(a)) return undefined;

  return a;
}
