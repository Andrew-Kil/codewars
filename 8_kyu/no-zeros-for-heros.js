// https://www.codewars.com/kata/no-zeros-for-heros/train/javascript

const noBoringZeros = num => {
  let nums = num.toString().split("");
  let zeroCheck = true;
  let ans = [];
  for (let i = nums.length - 1; i >= 0; i--) {
    if (zeroCheck === true) {
      if (nums[i] === "0") {
        zeroCheck = true;
        continue;
      } else {
        ans.push(nums[i]);
        zeroCheck = false;
      }
    } else {
      ans.push(nums[i]);
    }
  }

  return +ans
    .join("")
    .split("")
    .reverse()
    .join("");
};
