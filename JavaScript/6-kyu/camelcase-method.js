// https://www.codewars.com/kata/camelcase-method/train/javascript

// Write simple .camelCase method (camel_case function in PHP, CamelCase in C# or camelCase in Java) for strings. All words must have their first letter capitalized without spaces.

// For instance:

// "hello case".camelCase() => HelloCase
// "camel case word".camelCase() => CamelCaseWord

String.prototype.camelCase = function() {
  return `${this}`
    .split(" ")
    .filter(w => w.length)
    .map(w => w[0].toUpperCase() + w.slice(1))
    .join("");
};
