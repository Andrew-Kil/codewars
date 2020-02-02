// https://www.codewars.com/kata/sum-of-the-first-nth-term-of-series/train/javascript

// Task:
// Your task is to write a function which returns the sum of following series upto nth term(parameter).

// Series: 1 + 1/4 + 1/7 + 1/10 + 1/13 + 1/16 +...
// Rules:
// You need to round the answer to 2 decimal places and return it as String.

// If the given value is 0 then it should return 0.00

// You will only be given Natural Numbers as arguments.

// Examples:
// SeriesSum(1) => 1 = "1.00"
// SeriesSum(2) => 1 + 1/4 = "1.25"
// SeriesSum(5) => 1 + 1/4 + 1/7 + 1/10 + 1/13 = "1.57"
// NOTE: In PHP the function is called series_sum().

const SeriesSum = n => {
  let denom = 4;
  let curr = 1;
  let sum = 1;
  if (n === 0) return "0.00";
  if (n === 1) return "1.00";
  while (curr < n) {
    sum += 1 / denom;
    denom += 3;
    curr++;
  }
  return `${sum.toFixed(2)}`;
};
