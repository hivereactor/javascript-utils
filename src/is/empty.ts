/**
 * Checks and returns `true` if the passed value is empty.
 *
 * @param {*} a
 * @return {boolean}
 */

export function empty(a: any): boolean {
    if (typeof a === "object" && a !== null) {
        for (let _b in a) return false;
        return true;
    }

    return !a && a !== 0;
}
