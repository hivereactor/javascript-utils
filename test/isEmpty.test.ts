import { strictEqual as equal } from "assert";
import { isEmpty } from "../src";

describe("isEmpty()", () => {
  describe("arrays", () => {
    it("[] => true", () => equal(isEmpty([]), true));
    it("[0] => false", () => equal(isEmpty([0]), false));
    it("[1, 2] => false", () => equal(isEmpty([1, 2]), false));
  });

  describe("booleans", () => {
    it("true => false", () => equal(isEmpty(true), false));
    it("false => false", () => equal(isEmpty(false), false));
  });

  describe("null", () => {
    it("null => true", () => equal(isEmpty(null), true));
  });

  describe("numbers", () => {
    it("0 => false", () => equal(isEmpty(0), false));
    it("1 => false", () => equal(isEmpty(1), false));
    it("NaN => true", () => equal(isEmpty(NaN), true));
  });

  describe("objects", () => {
    it("{} => true", () => equal(isEmpty({}), true));
    it("{ a: 0 } => false", () => equal(isEmpty({ a: 0 }), false));
    it("{ a: 0, b: 1 } => false", () => equal(isEmpty({ a: 0, b: 1 }), false));
  });

  describe("strings", () => {
    it(`"" => true`, () => equal(isEmpty(""), true));
    it(`"a" => false`, () => equal(isEmpty("a"), false));
  });
});
