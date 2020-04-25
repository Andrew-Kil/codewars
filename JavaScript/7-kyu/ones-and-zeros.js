// https://www.codewars.com/kata/ones-and-zeros/train/javascript

const binaryArrayToNumber = arr => {
  let ans = 0;
  for (let i = arr.length - 1, exponent = 0; i >= 0; i--) {
    ans += arr[i] * Math.pow(2, exponent);
    exponent++;
  }
  return ans;
};
