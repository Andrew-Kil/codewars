// https://www.codewars.com/kata/valid-parentheses/train/javascript

const validParentheses = p => {
  const stack = [];
  const pHash = {
    "(": ")",
    "[": "]",
    "{": "}"
  };
  for (let paren of p) {
    if (pHash[paren]) stack.push(paren);
    else if (pHash[stack.pop()] !== paren) return false;
  }
  return stack.length === 0;
};
