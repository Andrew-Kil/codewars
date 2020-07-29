// https://www.codewars.com/kata/59cfc000aeb2844d16000075/train/javascript

// Given a string, capitalize the letters that occupy even indexes and odd indexes separately, and return as shown below. Index 0 will be considered even.

// For example, capitalize("abcdef") = ['AbCdEf', 'aBcDeF']. See test cases for more examples.

// The input will be a lowercase string with no spaces.

const capitalize = (s) => {
  const odd = [...s]
    .map((l, i) => (i % 2 ? l.toLowerCase() : l.toUpperCase()))
    .join("");
  const even = [...s]
    .map((l, i) => (i % 2 ? l.toUpperCase() : l.toLowerCase()))
    .join("");
  return [odd, even];
};
