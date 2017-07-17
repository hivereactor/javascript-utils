/**
 * Checks and returns `undefined` if the value is empty.
 *
 * @param {*} a – The passed value.
 * @return {*|undefined} – `undefined` if the passed value is empty.
 */

import { isEmpty } from "./isEmpty";
import { numberIsNaN } from "./numberIsNaN";

export function filterEmpty(a: any): any {
  return !isEmpty(a) ? a : undefined;
}
