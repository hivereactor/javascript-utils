import { numberIsNaN } from "../src";

describe("numberIsNaN()", () => {
  describe("numbers", () => {
    it("0 => false", () => expect(numberIsNaN(0)).toBe(false));
    it("1 => false", () => expect(numberIsNaN(1)).toBe(false));
    it("NaN => true", () => expect(numberIsNaN(NaN)).toBe(true));
  });

  describe("strings", () => {
    it(`"" => false`, () => expect(numberIsNaN("")).toBe(false));
    it(`"a" => false`, () => expect(numberIsNaN("a")).toBe(false));
  });
});
