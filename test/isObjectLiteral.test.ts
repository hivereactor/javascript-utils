import { strictEqual as equal } from "assert";
import { isObjectLiteral as temp } from "../src";

const isObjectLiteral = temp as any;

describe("isObjectLiteral()", () => {
  describe("arrays", () => {
    it("[] => false", () => equal(isObjectLiteral([]), false));
    it("[0] => false", () => equal(isObjectLiteral([0]), false));
  });

  describe("objects", () => {
    it("{} => true", () => equal(isObjectLiteral({}), true));
    it("{ a: 0 } => true", () => equal(isObjectLiteral({ a: 0 }), true));
  });

  describe("primitives", () => {
    it("0 => false", () => equal(isObjectLiteral(0), false));
    it(`"a" => false`, () => equal(isObjectLiteral("a"), false));
    it("null => false", () => equal(isObjectLiteral(null), false));
  });
});
