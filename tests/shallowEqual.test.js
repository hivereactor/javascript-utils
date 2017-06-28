import { shallowEqual } from "../src";

describe("shallowEqual()", () => {
  describe("arrays", () => {
    it("[] === []", () => expect(shallowEqual([], [])).toBe(true));
    it("[1] === [1]", () => expect(shallowEqual([1], [1])).toBe(true));
    it("[1] !== [2]", () => expect(shallowEqual([1], [2])).toBe(false));
  });

  describe("booleans", () => {
    it("true === true", () => expect(shallowEqual(true, true)).toBe(true));
    it("true !== false", () => expect(shallowEqual(true, false)).toBe(false));
  });

  describe("null", () => {
    it("null === null", () => expect(shallowEqual(null, null)).toBe(true));
    it("null !== 0", () => expect(shallowEqual(null, 0)).toBe(false));
  });

  describe("numbers", () => {
    it("0 === 0", () => expect(shallowEqual(0, 0)).toBe(true));
    it("0 !== 1", () => expect(shallowEqual(0, 1)).toBe(false));
    it("NaN !== 0", () => expect(shallowEqual(NaN, 0)).toBe(false));
    it("NaN === NaN", () => expect(shallowEqual(NaN, NaN)).toBe(true));
  });

  describe("objects", () => {
    it("{} === {}", () => expect(shallowEqual({}, {})).toBe(true));
    it("{ a: 0 } === { a: 0 }", () => expect(shallowEqual({ a: 0 }, { a: 0 })).toBe(true));
    it("{ a: 0 } !== { b: 1 }", () => expect(shallowEqual({ a: 0 }, { b: 1 })).toBe(false));
    it("{ a: 0 } !== { a: 0, b: 1 }", () => expect(shallowEqual({ a: 0 }, { a: 0, b: 1 })).toBe(false));
  });

  describe("strings", () => {
    it(`"a" === "a"`, () => expect(shallowEqual("a", "a")).toBe(true));
    it(`"a" !== "b"`, () => expect(shallowEqual("a", "b")).toBe(false));
  });
});
