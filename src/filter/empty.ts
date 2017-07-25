/**
 * Checks and returns `undefined` if the value is empty.
 *
 * @param {*} a
 * @return {*|undefined}
 */

import { is } from "../";

export function empty(a: any): any {
    return !is.empty(a) ? a : undefined;
}
