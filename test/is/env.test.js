const test = require("ava").default;
const { is } = require("../../lib/cjs");

test("is in test environment", (t) => t.is(is.env("test"), true));
