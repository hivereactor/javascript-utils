/**
 * Does a shallow comparison between the passed data.
 * For more, see docs/compare/shallow.md.
 *
 * @param {*} a
 * @param {*} b
 * @return {boolean}
 */

import { equals } from "../";

export function shallow(a: any, b: any): boolean {
    const hasProp = Object.prototype.hasOwnProperty;

    if (
        typeof a === "object" && typeof b === "object" &&
        a !== null && b !== null
    ) {
        const keysA = Object.keys(a);
        const keysB = Object.keys(b);
        const lengthA = keysA.length;

        if (lengthA !== keysB.length) return false;

        for (let i = 0; i < lengthA; i++) {
            const key = keysA[i];
            if (!hasProp.call(b, key) || a[key] !== b[key]) return false;
        }

        return true;
    }

    if (equals.nan(a) && equals.nan(b)) return true;

    return a === b;
}
