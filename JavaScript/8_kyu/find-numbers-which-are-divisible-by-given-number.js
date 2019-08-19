// https://www.codewars.com/kata/find-numbers-which-are-divisible-by-given-number/train/javascript

const divisibleBy = (numbers, divisor) =>
  numbers.filter(num => num % divisor === 0);
