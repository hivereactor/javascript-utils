const test = require("ava").default;
const { equals } = require("../../lib/cjs");

// numbers
test("0 => false", (t) => t.is(equals.nan(0), false));
test("1 => false", (t) => t.is(equals.nan(1), false));
test("NaN => true", (t) => t.is(equals.nan(NaN), true));

// strings
test(`"" => false`, (t) => t.is(equals.nan(""), false));
test(`"a" => false`, (t) => t.is(equals.nan("a"), false));
