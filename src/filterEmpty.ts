/**
 * Checks and filters the value if it's empty.
 * Returns `undefined` if either:
 * – An [array] or an {object} is empty.
 * – An empty string (`""`) has been passed.
 * – `null` has been passed.
 * – `NaN` has been passed.
 *
 * @param {*} a – The passed value.
 * @return {*|undefined} – `undefined` if the conditions above are met.
 */

import { isEmpty, numberIsNaN } from "./";

export function filterEmpty(a: any): any {
  return !isEmpty(a) ? a : undefined;
}