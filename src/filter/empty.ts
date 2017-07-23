/**
 * Checks and returns `undefined` if the value is empty.
 *
 * @param {*} a – The passed value.
 * @return {*|undefined} – `undefined` if the passed value is empty.
 */

import { is } from "../";

export function empty(a: any): any {
    return !is.empty(a) ? a : undefined;
}
