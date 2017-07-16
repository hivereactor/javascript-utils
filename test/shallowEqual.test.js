const test = require("ava").default;
const { shallowEqual } = require("../lib/cjs");

// arrays
test("[] === []", () => t.is(shallowEqual([], []), true));
test("[1] === [1]", () => t.is(shallowEqual([1], [1]), true));
test("[1] !== [2]", () => t.is(shallowEqual([1], [2]), false));
test("[1, 2] !== [2, 1]", () => t.is(shallowEqual([1, 2], [2, 1]), false));

// booleans
test("true === true", () => t.is(shallowEqual(true, true), true));
test("true !== false", () => t.is(shallowEqual(true, false), false));

// null
test("null === null", () => t.is(shallowEqual(null, null), true));
test("null !== 0", () => t.is(shallowEqual(null, 0), false));

// numbers
test("0 === 0", () => t.is(shallowEqual(0, 0), true));
test("0 !== 1", () => t.is(shallowEqual(0, 1), false));
test("NaN !== 0", () => t.is(shallowEqual(NaN, 0), false));
test("NaN === NaN", () => t.is(shallowEqual(NaN, NaN), true));

// objects
test("{} === {}", () => t.is(shallowEqual({}, {}), true));
test("{ a: 0 } === { a: 0 }", () => t.is(shallowEqual({ a: 0 }, { a: 0 }), true));
test("{ a: 0 } !== { b: 1 }", () => t.is(shallowEqual({ a: 0 }, { b: 1 }), false));
test("{ a: 0 } !== { a: 0, b: 1 }", () => t.is(shallowEqual({ a: 0 }, { a: 0, b: 1 }), false));

// strings
test(`"a" === "a"`, () => t.is(shallowEqual("a", "a"), true));
test(`"a" !== "b"`, () => t.is(shallowEqual("a", "b"), false));
