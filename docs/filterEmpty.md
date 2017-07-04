## filterEmpty(a: any): any | undefined

Checks and filters the value if it's empty. Returns `undefined` if either:

* An [array] or an {object} is empty.
* An empty string (`""`) has been passed.
* `null` has been passed.
* `NaN` has been passed.

#### Arguments

* `a` *(any)* – The passed value.

#### Returns

* *(any | undefined)* – `undefined` if the conditions above are met.
