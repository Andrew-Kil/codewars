// https://www.codewars.com/kata/5324945e2ece5e1f32000370/train/javascript

// Given the string representations of two integers, return the string representation of the sum of those integers.

// For example:

// sumStrings('1','2') // => '3'
// A string representation of an integer will contain no characters besides the ten numerals "0" to "9".

const sumStrings = (a, b) => {
  let sum = "";
  let carry = 0;
  if (a.length < b.length) a = `${"0".repeat(b.length - a.length)}${a}`;
  if (a.length > b.length) b = `${"0".repeat(a.length - b.length)}${b}`;
  for (let i = a.length - 1; i >= 0; i--) {
    const currSum = +a[i] + +b[i] + carry;
    let temp = currSum;
    if (currSum > 9) {
      carry = 1;
      temp = currSum % 10;
    } else {
      carry = 0;
    }
    sum = `${temp}${sum}`;
  }
  sum = `${carry}${sum}`;
  while (sum[0] === "0") {
    sum = sum.slice(1);
  }
  return sum;
};
