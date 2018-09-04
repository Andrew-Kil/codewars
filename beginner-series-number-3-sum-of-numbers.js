// Given two integers a and b, which can be positive or negative, find the sum of all the numbers between including them too and return it. If the two numbers are equal return a or b.
// Note: a and b are not ordered!
console.log('hi');
function GetSum(a, b) {
  let sum = 0;
  if (a > b) {
    for (let i = b; i <= a; i++) {
      sum += i;
    }
  } else if (a < b) {
    for (let i = a; i <= b; i++) {
      sum += i;
      debugger;
    }
  } else if (a === b) {
    return a;
  }
  return sum;
}
GetSum(10, 20);
