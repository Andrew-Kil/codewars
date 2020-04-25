// https://www.codewars.com/kata/two-sum/train/javascript

const twoSum = (nums, tar) => {
  for (let i = 0; i < nums.length - 1; i++) {
    for (let j = 1; j < nums.length; j++) {
      if (nums[i] + nums[j] === tar) return [i, j];
    }
  }
};
