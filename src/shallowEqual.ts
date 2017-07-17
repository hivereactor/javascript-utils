/**
 * Compares the passed data.
 * – If both of them are arrays, it checks if
 * the values are in the same position.
 * – If both of them are objects, it checks if
 * both of them have the same keys with the same value.
 *
 * @param {*} a – The first data.
 * @param {*} b – The second data.
 * @return {boolean} – `true` if the both passed data are equal.
 */

import { numberIsNaN } from "./numberIsNaN";

export function shallowEqual(a: any, b: any): boolean {
  const hasProp = Object.prototype.hasOwnProperty;

  // comparing objects and arrays
  if (typeof a === "object" && typeof b === "object" && a !== null && b !== null) {
    const keysA = Object.keys(a);
    const keysB = Object.keys(b);
    const length = keysA.length;

    if (length !== keysB.length) return false;

    for (let i = 0; i < length; i++) {
      const key = keysA[i];
      if (!hasProp.call(b, key) || a[key] !== b[key]) return false;
    }

    return true;
  }

  // NaN === NaN
  if (numberIsNaN(a) && numberIsNaN(b)) return true;

  return a === b;
}
