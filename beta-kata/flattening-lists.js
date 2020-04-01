// https://www.codewars.com/kata/54474afb46324f45190000a5

// In this Kata you will create a function that takes a list of lists as an input and returns a flattened list.

// Note that if there are more lists inside these lists, they should not be flattened.

// Example:
// flatten([[1,2],[3,4]]) == [1,2,3,4]
// flatten([[1],[2],[3],[4]]) == [1,2,3,4]

const flatten = l => {
  let result = [];
  for (let i = 0; i < l.length; i++) {
    result.push(...l[i]);
  }
  return result;
};
