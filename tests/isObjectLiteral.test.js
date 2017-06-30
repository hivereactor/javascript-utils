import { isObjectLiteral } from "../src";

describe("isObjectLiteral()", () => {
  describe("arrays", () => {
    it("[] => false", () => expect(isObjectLiteral([])).toBe(false));
    it("[0] => false", () => expect(isObjectLiteral([0])).toBe(false));
  });

  describe("objects", () => {
    it("{} => true", () => expect(isObjectLiteral({})).toBe(true));
    it("{ a: 0 } => true", () => expect(isObjectLiteral({ a: 0 })).toBe(true));
  });

  describe("primitives", () => {
    it("0 => false", () => expect(isObjectLiteral(0)).toBe(false));
    it(`"a" => false`, () => expect(isObjectLiteral("a")).toBe(false));
    it("null => false", () => expect(isObjectLiteral(null)).toBe(false));
  });
});
