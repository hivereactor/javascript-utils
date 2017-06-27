import { isEmptyObject } from "../../src";

describe("isEmptyObject()", () => {
  describe("arrays", () => {
    it("[] => true", () => expect(isEmptyObject([])).toBe(true));
    it("[0] => false", () => expect(isEmptyObject([0])).toBe(false));
    it("[1, 2] => false", () => expect(isEmptyObject([1, 2])).toBe(false));
  });

  describe("objects", () => {
    it("{} => true", () => expect(isEmptyObject({})).toBe(true));
    it("{ a: 0 } => false", () => expect(isEmptyObject({ a: 0 })).toBe(false));
    it("{ a: 0, b: 1 } => false", () => expect(isEmptyObject({ a: 0, b: 1 })).toBe(false));
  });

  describe("others", () => {
    it("1 => false", () => expect(isEmptyObject(1)).toBe(false));
    it(`"a" => false`, () => expect(isEmptyObject("a")).toBe(false));
  });
});
