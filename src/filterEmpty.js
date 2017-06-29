/**
 * Checks and filters the value if it's empty.
 * Returns `undefined` if either:
 * – An [array] or an {object} is empty.
 * – `null` has been passed.
 * – `NaN` has been passed.
 *
 * @flow
 * @param {*} a – The passed value.
 * @return {*|undefined} – Either `undefined` or the passed value.
 */

import { isEmpty, numberIsNaN } from "./";

export function filterEmpty(a: mixed): mixed {
  return !isEmpty(a) ? a : undefined;
}
