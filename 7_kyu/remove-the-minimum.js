// https://www.codewars.com/kata/563cf89eb4747c5fb100001b

const removeSmallest = nums => {
  let smallest = nums[0];
  nums.forEach(el => {
    if (el < smallest) {
      smallest = el;
    }
  });
  return smallest;
};
