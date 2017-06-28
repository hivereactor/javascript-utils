/**
 * @flow
 */

import { numberIsNaN } from "./";

export function shallowEqual(a: mixed, b: mixed): boolean {
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
