// https://www.codewars.com/kata/valid-parentheses/train/javascript

// Write a function called that takes a string of parentheses, and determines if the order of the parentheses is valid. The function should return true if the string is valid, and false if it's invalid.

// Examples
// "()"              =>  true
// ")(()))"          =>  false
// "("               =>  false
// "(())((()())())"  =>  true
// Constraints
// 0 <= input.length <= 100

const validParentheses = p => {
  let tracker = 0;
  for (let char of p) {
    if (char === "(") tracker++;
    if (char === ")") tracker--;
    if (tracker < 0) return false;
  }
  return tracker === 0;
};
