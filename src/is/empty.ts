/**
 * Checks and returns `true` if the passed value is empty.
 *
 * @param {*} a – The passed value.
 * @return {boolean} – `true` if the passed value is empty.
 */

export function empty(a: any): boolean {
    if (typeof a === "object") {
        // typeof null => "object"
        if (a === null) return true;

        for (let _b in a) return false;
        return true;
    }

    return !a && a !== 0;
}
