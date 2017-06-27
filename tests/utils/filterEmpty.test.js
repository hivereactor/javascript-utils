import { filterEmpty } from "../../src/filterEmpty";

describe("utils/filterEmpty()", () => {
  describe("arrays", () => {
    it("[] => undefined", () => expect(filterEmpty([])).toBe(undefined));
    it("[0] => [0]", () => expect(filterEmpty([0])).toEqual([0]));
    it("[1, 2] => [1, 2]", () => expect(filterEmpty([1, 2])).toEqual([1, 2]));
  });

  describe("booleans", () => {
    it("true => true", () => expect(filterEmpty(true)).toBe(true));
    it("false => false", () => expect(filterEmpty(false)).toBe(false));
  });

  describe("null", () => {
    it("null => undefined", () => expect(filterEmpty(null)).toBe(undefined));
  });

  describe("numbers", () => {
    it("0 => 0", () => expect(filterEmpty(0)).toBe(0));
    it("1 => 1", () => expect(filterEmpty(1)).toBe(1));
    it("NaN => undefined", () => expect(filterEmpty(NaN)).toBe(undefined));
  });

  describe("objects", () => {
    it("{} => undefined", () => expect(filterEmpty({})).toBe(undefined));
    it("{ a: 0 } => { a: 0 }", () => expect(filterEmpty({ a: 0 })).toEqual({ a: 0 }));
    it("{ a: 0, b: 1 } => { a: 0, b: 1 }", () => expect(filterEmpty({ a: 0, b: 1 })).toEqual({ a: 0, b: 1 }));
  });

  describe("strings", () => {
    it(`"" => ""`, () => expect(filterEmpty("")).toBe(""));
    it(`"a" => "a"`, () => expect(filterEmpty("a")).toBe("a"));
  });
});