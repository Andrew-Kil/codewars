// https://www.codewars.com/kata/52a112d9488f506ae7000b95/train/javascript

// Write a function with the signature shown below:

// function isIntArray(arr) {
//   return true
// }
// returns true / True if every element in an array is an integer or a float with no decimals.
// returns true / True if array is empty.
// returns false / False for every other input.

const isIntArray = (a) => (!a ? false : a.every((el) => Number.isInteger(el)));
