import { numberNaN } from "../../src";

describe("numberNaN()", () => {
  describe("numbers", () => {
    it("0 => false", () => expect(numberNaN(0)).toBe(false));
    it("1 => false", () => expect(numberNaN(1)).toBe(false));
    it("NaN => true", () => expect(numberNaN(NaN)).toBe(true));
  });

  describe("strings", () => {
    it(`"" => false`, () => expect(numberNaN("")).toBe(false));
    it(`"a" => false`, () => expect(numberNaN("a")).toBe(false));
  });
});
