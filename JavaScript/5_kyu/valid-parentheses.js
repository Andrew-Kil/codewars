// https://www.codewars.com/kata/valid-parentheses/train/javascript

const validParentheses = p => {
  let tracker = 0;
  for (let char of p) {
    if (char === "(") tracker++;
    if (char === ")") tracker--;
    if (tracker < 0) return false;
  }
  return tracker === 0;
};
