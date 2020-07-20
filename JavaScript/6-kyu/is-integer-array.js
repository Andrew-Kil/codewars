// https://www.codewars.com/kata/52a112d9488f506ae7000b95/train/javascript

// Write a function with the signature shown below:

// function isIntArray(arr) {
//   return true
// }
// returns true / True if every element in an array is an integer or a float with no decimals.
// returns true / True if array is empty.
// returns false / False for every other input.

const isIntArray = (arr) => {
  if (!Array.isArray(arr)) return false;
  if (
    arr.every((el) => Number(el) === el && Number.isInteger(el)) ||
    arr.every((el) => Number(el) === el && el % 1 !== 0) ||
    arr.length === 0
  ) {
    return true;
  }
  return false;
};
