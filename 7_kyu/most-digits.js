// https://www.codewars.com/kata/58daa7617332e59593000006/train/javascript

// Find the number with the most digits.

// If two numbers in the argument array have the same number of digits, return the first one in the array.

const findLongest = arr => arr.sort((a, b) => `${b}`.length - `${a}`.length)[0];
