import { strictEqual as equal } from "assert";
import { shallowEqual } from "../src";

describe("shallowEqual()", () => {
  describe("arrays", () => {
    it("[] === []", () => equal(shallowEqual([], []), true));
    it("[1] === [1]", () => equal(shallowEqual([1], [1]), true));
    it("[1] !== [2]", () => equal(shallowEqual([1], [2]), false));
    it("[1, 2] !== [2, 1]", () => equal(shallowEqual([1, 2], [2, 1]), false));
  });

  describe("booleans", () => {
    it("true === true", () => equal(shallowEqual(true, true), true));
    it("true !== false", () => equal(shallowEqual(true, false), false));
  });

  describe("null", () => {
    it("null === null", () => equal(shallowEqual(null, null), true));
    it("null !== 0", () => equal(shallowEqual(null, 0), false));
  });

  describe("numbers", () => {
    it("0 === 0", () => equal(shallowEqual(0, 0), true));
    it("0 !== 1", () => equal(shallowEqual(0, 1), false));
    it("NaN !== 0", () => equal(shallowEqual(NaN, 0), false));
    it("NaN === NaN", () => equal(shallowEqual(NaN, NaN), true));
  });

  describe("objects", () => {
    it("{} === {}", () => equal(shallowEqual({}, {}), true));
    it("{ a: 0 } === { a: 0 }", () => equal(shallowEqual({ a: 0 }, { a: 0 }), true));
    it("{ a: 0 } !== { b: 1 }", () => equal(shallowEqual({ a: 0 }, { b: 1 }), false));
    it("{ a: 0 } !== { a: 0, b: 1 }", () => equal(shallowEqual({ a: 0 }, { a: 0, b: 1 }), false));
  });

  describe("strings", () => {
    it(`"a" === "a"`, () => equal(shallowEqual("a", "a"), true));
    it(`"a" !== "b"`, () => equal(shallowEqual("a", "b"), false));
  });
});
