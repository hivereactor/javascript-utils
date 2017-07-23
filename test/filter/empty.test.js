const test = require("ava").default;
const { filter } = require("../../lib/cjs");

// arrays
test("[] => undefined", (t) => t.is(filter.empty([]), undefined));
test("[0] => [0]", (t) => t.deepEqual(filter.empty([0]), [0]));
test("[1, 2] => [1, 2]", (t) => t.deepEqual(filter.empty([1, 2]), [1, 2]))

// booleans
test("true => true", (t) => t.is(filter.empty(true), true));
test("false => undefined", (t) => t.is(filter.empty(false), undefined));

// null
test("null => undefined", (t) => t.is(filter.empty(null), undefined));
test("undefined => undefined", (t) => t.is(filter.empty(undefined), undefined));

// numbers
test("0 => 0", (t) => t.is(filter.empty(0), 0));
test("1 => 1", (t) => t.is(filter.empty(1), 1));
test("NaN => undefined", (t) => t.is(filter.empty(NaN), undefined));

// objects
test("{} => undefined", (t) => t.is(filter.empty({}), undefined));
test("{ a: 0 } => { a: 0 }", (t) => t.deepEqual(filter.empty({ a: 0 }), { a: 0 }));
test("{ a: 0, b: 1 } => { a: 0, b: 1 }", (t) => t.deepEqual(filter.empty({ a: 0, b: 1 }), { a: 0, b: 1 }));

// strings
test(`"" => ""`, (t) => t.is(filter.empty(""), undefined));
test(`"a" => "a"`, (t) => t.is(filter.empty("a"), "a"));
