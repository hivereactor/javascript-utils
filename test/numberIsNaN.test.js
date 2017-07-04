const { numberIsNaN } = require("../lib/cjs");
const test = require("ava").default;

// nubmers
test("0 => false", (t) => t.is(numberIsNaN(0), false));
test("1 => false", (t) => t.is(numberIsNaN(1), false));
test("NaN => true", (t) => t.is(numberIsNaN(NaN), true));

// strings
test(`"" => false`, (t) => t.is(numberIsNaN(""), false));
test(`"a" => false`, (t) => t.is(numberIsNaN("a"), false));
