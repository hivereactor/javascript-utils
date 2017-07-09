import { deepStrictEqual as deepEqual, strictEqual as equal } from "assert";
import { filterEmpty } from "../src";

describe("filterEmpty()", () => {
  describe("arrays", () => {
    it("[] => undefined", () => equal(filterEmpty([]), undefined));
    it("[0] => [0]", () => deepEqual(filterEmpty([0]), [0]));
    it("[1, 2] => [1, 2]", () => deepEqual(filterEmpty([1, 2]), [1, 2]))
  });

  describe("booleans", () => {
    it("true => true", () => equal(filterEmpty(true), true));
    it("false => false", () => equal(filterEmpty(false), false));
  });

  describe("null", () => {
    it("null => undefined", () => equal(filterEmpty(null), undefined));
    it("undefined => undefined", () => equal(filterEmpty(undefined), undefined));
  });

  describe("numbers", () => {
    it("0 => 0", () => equal(filterEmpty(0), 0));
    it("1 => 1", () => equal(filterEmpty(1), 1));
    it("NaN => undefined", () => equal(filterEmpty(NaN), undefined));
  });

  describe("objects", () => {
    it("{} => undefined", () => equal(filterEmpty({}), undefined));
    it("{ a: 0 } => { a: 0 }", () => deepEqual(filterEmpty({ a: 0 }), { a: 0 }));
    it("{ a: 0, b: 1 } => { a: 0, b: 1 }", () => deepEqual(filterEmpty({ a: 0, b: 1 }), { a: 0, b: 1 }));
  });

  describe("strings", () => {
    it(`"" => ""`, () => equal(filterEmpty(""), undefined));
    it(`"a" => "a"`, () => equal(filterEmpty("a"), "a"));
  });
});
