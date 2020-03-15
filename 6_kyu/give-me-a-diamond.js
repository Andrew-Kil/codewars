// https://www.codewars.com/kata/5503013e34137eeeaa001648/train/javascript

// Jamie is a programmer, and James' girlfriend. She likes diamonds, and wants a diamond string from James. Since James doesn't know how to make this happen, he needs your help.

// Task
// You need to return a string that looks like a diamond shape when printed on the screen, using asterisk (*) characters. Trailing spaces should be removed, and every line must be terminated with a newline character (\n).

// Return null/nil/None/... if the input is an even number or negative, as it is not possible to print a diamond of even or negative size.

// Examples
// A size 3 diamond:

//  *
// ***
//  *
// ...which would appear as a string of " *\n***\n *\n"

// A size 5 diamond:

//   *
//  ***
// *****
//  ***
//   *
// ...that is: " *\n ***\n*****\n ***\n *\n"

const diamond = n => {
  if (n % 2 === 0 || n < 0) return null;
  const center = `${"*".repeat(n)}\n`;
  let top = "";
  let bottom = "";
  let curr = n - 2;
  let padding = 1;
  while (curr > 0) {
    bottom += `${" ".repeat(padding)}${"*".repeat(curr)}\n`;
    curr -= 2;
    padding += 1;
  }
  curr = 1;
  padding -= 1;
  while (curr < n) {
    top += `${" ".repeat(padding)}${"*".repeat(curr)}\n`;
    curr += 2;
    padding -= 1;
  }
  return `${top}${center}${bottom}`;
};
