const test = require("ava").default;
const { is } = require("../../lib/cjs");

// arrays
test("[] => true", (t) => t.is(is.empty([]), true));
test("[0] => false", (t) => t.is(is.empty([0]), false));
test("[1, 2] => false", (t) => t.is(is.empty([1, 2]), false));

// booleans
test("true => false", (t) => t.is(is.empty(true), false));
test("false => true", (t) => t.is(is.empty(false), true));

// null
test("null => true", (t) => t.is(is.empty(null), true));
test("undefined => true", (t) => t.is(is.empty(undefined), true));

// numbers
test("0 => false", (t) => t.is(is.empty(0), false));
test("1 => false", (t) => t.is(is.empty(1), false));
test("NaN => true", (t) => t.is(is.empty(NaN), true));

// objects
test("{} => true", (t) => t.is(is.empty({}), true));
test("{ a: 0 } => false", (t) => t.is(is.empty({ a: 0 }), false));
test("{ a: 0, b: 1 } => false", (t) => t.is(is.empty({ a: 0, b: 1 }), false));

// strings
test(`"" => true`, (t) => t.is(is.empty(""), true));
test(`"a" => false`, (t) => t.is(is.empty("a"), false));
