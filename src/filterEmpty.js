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

    // Get the first key, reassign it and break the loop
    // If there are no keys, it doesn't do anything
    let key = undefined;
    for (key in a) break;

    return key !== undefined ? a : undefined;
  }
  
  if (Number.isNaN(a)) return undefined;

  return a;
}

export { filterEmpty };