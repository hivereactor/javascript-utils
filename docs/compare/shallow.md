## compare.shallow(a: any, b: any): boolean

Does a shallow comparison between the passed data.

for _ to be classified as matched:
* [arrays] → both arrays must have strictly equal values
  placed in the same index
* {objects} → both objects must have the same keys with
  the strictily equal values/references
* \* → must pass the strict comparison
