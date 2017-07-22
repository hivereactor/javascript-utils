const test = require("ava").default;
const { is } = require("../../lib/cjs");

// arrays
test("[] => false", (t) => t.is(is.objectLiteral([]), false));
test("[0] => false", (t) => t.is(is.objectLiteral([0]), false));

// objects
test("{} => true", (t) => t.is(is.objectLiteral({}), true));
test("{ a: 0 } => true", (t) => t.is(is.objectLiteral({ a: 0 }), true));

// primitives
test("0 => false", (t) => t.is(is.objectLiteral(0), false));
test(`"a" => false`, (t) => t.is(is.objectLiteral("a"), false));
test("null => false", (t) => t.is(is.objectLiteral(null), false));
