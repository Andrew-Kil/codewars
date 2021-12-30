// https://www.codewars.com/kata/59f08f89a5e129c543000069/train/javascript

// In this Kata, you will be given an array of strings and your task is to remove all consecutive duplicate letters from each string in the array.

// For example:

// dup(["abracadabra","allottee","assessee"]) = ["abracadabra","alote","asese"].
// dup(["kelless","keenness"]) = ["keles","kenes"].
// Strings will be lowercase only, no spaces. See test cases for more examples.

// Good luck!

const dup = (s) => {
  for (let i = 0; i < s.length; i++) {
    let curr = "";
    for (let j = 0; j < s[i].length; j++) {
      if (s[i][j] !== s[i][j - 1]) curr += s[i][j];
    }
    s[i] = curr;
  }
  return s;
};
