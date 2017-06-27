/**
 * @flow
 */

function isEmptyObject(a: {}): boolean {
  if (typeof a !== "object") {
    throw new Error("You must provide either an object or an array.");
  }

  // typeof null => "object"
  if (a === null) return true;

  // Get the first key, reassign it and break the loop
  // If there are no keys, it doesn't do anything
  let key = undefined;
  for (key in a) break;

  return key === undefined;
}

export { isEmptyObject };
