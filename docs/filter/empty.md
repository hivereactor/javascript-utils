## filter.empty(a: any): any?

Checks and returns `undefined` if the value is [empty](#emptiness).

#### Emptiness

The passed value is considered empty if the value is one or more of the following:

* An empty array (`[]`)
* An empty object (`{}`)
* A [falsy](https://developer.mozilla.org/en-US/docs/Glossary/Falsy) value **except `0`** – *(that means either:)*
  * `false`
  * `null`
  * `undefined`
  * `NaN`
  * `""`
