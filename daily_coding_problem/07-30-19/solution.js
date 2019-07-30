const productExceptCurrent = arr => {
  let ans = [];
  const prod = arr.reduce((a, b) => a * b);
  arr.map(num => ans.push(prod / num));
  return ans;
};

console.log(productExceptCurrent([1, 2, 3, 4, 5]));
console.log(productExceptCurrent([3, 2, 1]));

// [1, 2, 3, 4, 5] -> [120, 60, 40, 30, 24]
// [3, 2, 1] -> [2, 3, 6]
