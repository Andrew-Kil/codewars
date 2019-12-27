// https://www.codewars.com/kata/abbreviate-a-two-word-name/train/javascript

// Write a function to convert a name into initials. This kata strictly takes two words with one space in between them.

// The output should be two capital letters with a dot separating them.

// It should look like this:

// Sam Harris => S.H

// Patrick Feeney => P.F

const abbrevName = name => {
  return `${name
    .split(" ")[0]
    .charAt(0)
    .toUpperCase()}.${name
    .split(" ")[1]
    .charAt(0)
    .toUpperCase()}`;
};
