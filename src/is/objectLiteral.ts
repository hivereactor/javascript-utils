/**
 * Checks if the passed value is an {object literal}.
 *
 * @param {object} a
 * @return {boolean}
 */

export function objectLiteral(a: object): boolean {
    return (
        a !== null &&
        typeof a === "object" &&
        a.constructor === Object
    );
}
