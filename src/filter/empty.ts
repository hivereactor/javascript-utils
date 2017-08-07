/**
 * Returns undefined if the passed data is considered empty.
 *
 * @param {*} a
 * @return {*|undefined}
 */

import { is } from "../";

export function empty(a: any): any {
    return !is.empty(a) ? a : undefined;
}
