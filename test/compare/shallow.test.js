const test = require("ava").default;
const { compare } = require("../../lib/cjs");

// arrays
test("[] === []", (t) => t.is(compare.shallow([], []), true));
test("[1] === [1]", (t) => t.is(compare.shallow([1], [1]), true));
test("[1] !== [2]", (t) => t.is(compare.shallow([1], [2]), false));
test("[1, 2] !== [2, 1]", (t) => t.is(compare.shallow([1, 2], [2, 1]), false));

// booleans
test("true === true", (t) => t.is(compare.shallow(true, true), true));
test("true !== false", (t) => t.is(compare.shallow(true, false), false));

// null
test("null === null", (t) => t.is(compare.shallow(null, null), true));
test("null !== 0", (t) => t.is(compare.shallow(null, 0), false));

// numbers
test("0 === 0", (t) => t.is(compare.shallow(0, 0), true));
test("0 !== 1", (t) => t.is(compare.shallow(0, 1), false));
test("NaN !== 0", (t) => t.is(compare.shallow(NaN, 0), false));
test("NaN === NaN", (t) => t.is(compare.shallow(NaN, NaN), true));

// objects
test("{} === {}", (t) => t.is(compare.shallow({}, {}), true));
test("{ a: 0 } === { a: 0 }", (t) => t.is(compare.shallow({ a: 0 }, { a: 0 }), true));
test("{ a: 0 } !== { b: 1 }", (t) => t.is(compare.shallow({ a: 0 }, { b: 1 }), false));
test("{ a: 0 } !== { a: 0, b: 1 }", (t) => t.is(compare.shallow({ a: 0 }, { a: 0, b: 1 }), false));

// strings
test(`"a" === "a"`, (t) => t.is(compare.shallow("a", "a"), true));
test(`"a" !== "b"`, (t) => t.is(compare.shallow("a", "b"), false));
