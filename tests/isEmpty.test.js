import { isEmpty } from "../src";

describe("isEmpty()", () => {
  describe("arrays", () => {
    it("[] => true", () => expect(isEmpty([])).toBe(true));
    it("[0] => false", () => expect(isEmpty([0])).toBe(false));
    it("[1, 2] => false", () => expect(isEmpty([1, 2])).toBe(false));
  });

  describe("booleans", () => {
    it("true => false", () => expect(isEmpty(true)).toBe(false));
    it("false => false", () => expect(isEmpty(false)).toBe(false));
  });

  describe("null", () => {
    it("null => true", () => expect(isEmpty(null)).toBe(true));
  });

  describe("numbers", () => {
    it("0 => false", () => expect(isEmpty(0)).toBe(false));
    it("1 => false", () => expect(isEmpty(1)).toBe(false));
    it("NaN => true", () => expect(isEmpty(NaN)).toBe(true));
  });

  describe("objects", () => {
    it("{} => true", () => expect(isEmpty({})).toBe(true));
    it("{ a: 0 } => false", () => expect(isEmpty({ a: 0 })).toBe(false));
    it("{ a: 0, b: 1 } => false", () => expect(isEmpty({ a: 0, b: 1 })).toBe(false));
  });

  describe("strings", () => {
    it(`"" => true`, () => expect(isEmpty("")).toBe(true));
    it(`"a" => false`, () => expect(isEmpty("a")).toBe(false));
  });
});
