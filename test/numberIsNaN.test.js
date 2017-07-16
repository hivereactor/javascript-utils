const test = require("ava").default;
const { numberIsNaN } = require("../lib/cjs");

// numbers
test("0 => false", () => t.is(numberIsNaN(0), false));
test("1 => false", () => t.is(numberIsNaN(1), false));
test("NaN => true", () => t.is(numberIsNaN(NaN), true));

// strings
test(`"" => false`, () => t.is(numberIsNaN(""), false));
test(`"a" => false`, () => t.is(numberIsNaN("a"), false));
