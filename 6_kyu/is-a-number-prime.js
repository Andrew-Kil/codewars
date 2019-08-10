// https://www.codewars.com/kata/is-a-number-prime/train/javascript

const isPrime = num => {
  if (num < 2) return false;
  if (num === 2) return true;
  const sqrt = Math.sqrt(num) + 1;
  for (let i = 2; i < sqrt; i++) {
    if (num % i === 0) return false;
  }
  return true;
};
