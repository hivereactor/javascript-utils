/**
 * Checks if the passed object or array is empty.
 * Returns `true` if either:
 * – An [array] or {object} is empty.
 * – `null` has been passed.
 *
 * If the passed data is not an {object} or
 * an [array], it will return `false`.
 *
 * @flow
 * @param {array|object} a – The passed object or array.
 * @return {boolean} – `false` if {object} or [array] has at least one key.
 */

type Object = {} | Array<mixed>;

function isEmptyObject(a: Object): boolean {
  if (typeof a !== "object") return false;

  // typeof null => "object"
  if (a === null) return true;

  // Get the first key, reassign it and break the loop
  // If there are no keys, it doesn't do anything
  let key = undefined;
  for (key in a) break;

  return key === undefined;
}

export { isEmptyObject };
