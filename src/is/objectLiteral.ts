/**
 * Checks if the passed value is an object literal (`{}`).
 *
 * @param {object} a – The passed value.
 * @return {boolean} – `true` if the passed value is an object literal.
 */

export function objectLiteral(a: object): boolean {
    return (
        a !== null &&
        typeof a === "object" &&
        a.constructor === Object
    );
}
