// https://www.codewars.com/kata/51e0007c1f9378fa810002a9/train/javascript

// Write a simple parser that will parse and run Deadfish.

// Deadfish has 4 commands, each 1 character long:

// i increments the value (initially 0)
// d decrements the value
// s squares the value
// o outputs the value into the return array
// Invalid characters should be ignored.

// parse("iiisdoso") => [ 8, 64 ]

const parse = data => {
  const result = [];
  [...data].reduce((acc, curr) => {
    if (curr === "i") acc++;
    if (curr === "d") acc--;
    if (curr === "s") acc = Math.pow(acc, 2);
    if (curr === "o") result.push(acc);
    return acc;
  }, 0);
  return result;
};
