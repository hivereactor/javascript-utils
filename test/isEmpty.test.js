const { isEmpty } = require("../lib/cjs");
const test = require("ava").default;

// arrays
test("[] => true", (t) => t.is(isEmpty([]), true));
test("[0] => false", (t) => t.is(isEmpty([0]), false));
test("[1, 2] => false", (t) => t.is(isEmpty([1, 2]), false));

// booleans
test("true => false", (t) => t.is(isEmpty(true), false));
test("false => false", (t) => t.is(isEmpty(false), false));

// null
test("null => true", (t) => t.is(isEmpty(null), true));

// numbers
test("0 => false", (t) => t.is(isEmpty(0), false));
test("1 => false", (t) => t.is(isEmpty(1), false));
test("NaN => true", (t) => t.is(isEmpty(NaN), true));

// objects
test("{} => true", (t) => t.is(isEmpty({}), true));
test("{ a: 0 } => false", (t) => t.is(isEmpty({ a: 0 }), false));
test("{ a: 0, b: 1 } => false", (t) => t.is(isEmpty({ a: 0, b: 1 }), false));

// strings
test(`"" => true`, (t) => t.is(isEmpty(""), true));
test(`"a" => false`, (t) => t.is(isEmpty("a"), false));
