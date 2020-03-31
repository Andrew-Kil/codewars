// Write a function that accepts two arguments and returns the remainder after dividing the larger number by the smaller number. Division by zero should return NaN (in C#, throw a new DivideByZeroException instead). Arguments will both be integers.
const remainder = (a, b) => {
  if (a === 0 || b === 0) {
    return NaN;
  } else if (a > b) {
    return a % b;
  } else if (b > a) {
    return b % a;
  } else {
    return 0;
  }
};
