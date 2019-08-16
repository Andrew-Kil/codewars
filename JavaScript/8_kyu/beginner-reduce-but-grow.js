// https://www.codewars.com/kata/beginner-reduce-but-grow/train/javascript

const grow = arr => {
  let ans = 1;
  for (let int of arr) {
    ans *= int;
  }
  return ans;
};
