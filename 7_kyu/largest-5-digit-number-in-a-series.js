// https://www.codewars.com/kata/largest-5-digit-number-in-a-series/train/javascript

const solution = digits => {
  let test = +digits.slice(0, 5);
  for (let i = 1; i < digits.length; i++) {
    if (+digits.slice(i, i + 5) > test) test = +digits.slice(i, i + 5);
  }
  return test;
};
