const test = require("ava").default;
const { filterEmpty } = require("../lib/cjs");

// arrays
test("[] => undefined", (t) => t.is(filterEmpty([]), undefined));
test("[0] => [0]", (t) => t.deepEqual(filterEmpty([0]), [0]));
test("[1, 2] => [1, 2]", (t) => t.deepEqual(filterEmpty([1, 2]), [1, 2]))

// booleans
test("true => true", (t) => t.is(filterEmpty(true), true));
test("false => false", (t) => t.is(filterEmpty(false), false));

// null
test("null => undefined", (t) => t.is(filterEmpty(null), undefined));
test("undefined => undefined", (t) => t.is(filterEmpty(undefined), undefined));

// numbers
test("0 => 0", (t) => t.is(filterEmpty(0), 0));
test("1 => 1", (t) => t.is(filterEmpty(1), 1));
test("NaN => undefined", (t) => t.is(filterEmpty(NaN), undefined));

// objects
test("{} => undefined", (t) => t.is(filterEmpty({}), undefined));
test("{ a: 0 } => { a: 0 }", (t) => t.deepEqual(filterEmpty({ a: 0 }), { a: 0 }));
test("{ a: 0, b: 1 } => { a: 0, b: 1 }", (t) => t.deepEqual(filterEmpty({ a: 0, b: 1 }), { a: 0, b: 1 }));

// strings
test(`"" => ""`, (t) => t.is(filterEmpty(""), undefined));
test(`"a" => "a"`, (t) => t.is(filterEmpty("a"), "a"));
