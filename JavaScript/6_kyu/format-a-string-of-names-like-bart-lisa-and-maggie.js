// https://www.codewars.com/kata/format-a-string-of-names-like-bart-lisa-and-maggie

// Given: an array containing hashes of names

// Return: a string formatted as a list of names separated by commas except for the last two names, which should be separated by an ampersand.

// Example:

// list([ {name: 'Bart'}, {name: 'Lisa'}, {name: 'Maggie'} ])
// // returns 'Bart, Lisa & Maggie'

// list([ {name: 'Bart'}, {name: 'Lisa'} ])
// // returns 'Bart & Lisa'

// list([ {name: 'Bart'} ])
// // returns 'Bart'

// list([])
// // returns ''
// Note: all the hashes are pre-validated and will only contain A-Z, a-z, '-' and '.'.

const makeAmpString = names => `${names[0].name} & ${names[1].name}`;

const list = names => {
  if (names.length === 0) return "";
  if (names.length === 1) return names[0].name;
  if (names.length === 2) return makeAmpString(names);
  const lastTwo = makeAmpString(names.slice(-2));
  const others = names
    .slice(0, -2)
    .map(n => n.name + ",")
    .join(" ");
  return `${others} ${lastTwo}`;
};
