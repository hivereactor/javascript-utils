const { isObjectLiteral } = require("../lib/cjs");
const test = require("ava").default;

// arrays
test("[] => false", (t) => t.is(isObjectLiteral([]), false));
test("[0] => false", (t) => t.is(isObjectLiteral([0]), false));

// objects
test("{} => true", (t) => t.is(isObjectLiteral({}), true));
test("{ a: 0 } => true", (t) => t.is(isObjectLiteral({ a: 0 }), true));

// primitives
test("0 => false", (t) => t.is(isObjectLiteral(0), false));
test(`"a" => false`, (t) => t.is(isObjectLiteral("a"), false));
test("null => false", (t) => t.is(isObjectLiteral(null), false));
