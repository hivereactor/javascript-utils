function numberNaN(a: mixed): boolean {
  return typeof a === "number" && isNaN(a);
}

export { numberNaN };