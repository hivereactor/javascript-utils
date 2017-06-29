## filterEmpty(a: mixed): mixed | undefined

Checks and filters the value if it's empty. Returns `undefined` if either:

* An [array] or an {object} is empty.
* An empty string (`""`) has been passed.
* `null` has been passed.
* `NaN` has been passed.

#### Arguments

* `a` *(mixed)* – The passed value.

#### Returns

* *(mixed)* – `undefined` if the conditions above are met.
