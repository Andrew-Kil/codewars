// https://www.codewars.com/kata/find-the-divisors/train/javascript

const divisors = int => {
  let nums = [];
  for (let i = 2; i < int; i++) {
    if (int % i === 0) nums.push(i);
  }
  return nums.length === 0 ? `${int} is prime` : nums;
};
