import { strictEqual as equal } from "assert";
import { numberIsNaN as temp } from "../src";

const numberIsNaN = temp as any;

describe("numberIsNaN()", () => {
  describe("numbers", () => {
    it("0 => false", () => equal(numberIsNaN(0), false));
    it("1 => false", () => equal(numberIsNaN(1), false));
    it("NaN => true", () => equal(numberIsNaN(NaN), true));
  });

  describe("strings", () => {
    it(`"" => false`, () => equal(numberIsNaN(""), false));
    it(`"a" => false`, () => equal(numberIsNaN("a"), false));
  });
});
