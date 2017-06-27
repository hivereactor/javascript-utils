/**
 * Filters the passed value and returns `undefined` if either:
 * – An [array] or an {object} is empty.
 * – `null` has been passed.
 * – `NaN` has been passed.
 *
 * @flow
 * @param {*} a – The passed data.
 * @return {*|undefined} – Either `undefined` or the passed data.
 */

function filterEmpty(a: mixed): mixed {
  if (typeof a === "object") {
    // typeof null => "object"
    if (a === null) return undefined;

    return Object.keys(a).length > 0 ? a : undefined;
  }
  
  // isNaN("a") => true
  // Number.isNaN("a") => false
  if (Number.isNaN(a)) return undefined;

  return a;
}

export { filterEmpty };