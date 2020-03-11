// https://www.codewars.com/kata/54521e9ec8e60bc4de000d6c/train/javascript

// The maximum sum subarray problem consists in finding the maximum sum of a contiguous subsequence in an array or list of integers:

// maxSequence([-2, 1, -3, 4, -1, 2, 1, -5, 4])
// // should be 6: [4, -1, 2, 1]
// Easy case is when the list is made up of only positive numbers and the maximum sum is the sum of the whole array. If the list is made up of only negative numbers, return 0 instead.

// Empty list is considered to have zero greatest sum. Note that the empty list or array is also a valid sublist/subarray.

const isArrOnlyPositives = arr =>
  arr.filter(int => int > 0).length === arr.length;

const isArrOnlyNegatives = arr =>
  arr.filter(int => int < 0).length === arr.length;

const isArrEmpty = arr => arr.length === 0;

const maxSequence = arr => {
  if (isArrOnlyPositives(arr)) return arr.reduce((acc, curr) => acc + curr, 0);
  if (isArrOnlyNegatives(arr) || isArrEmpty(arr)) return 0;

  let max = null;
  for (let i = 0; i < arr.length; i++) {
    for (let j = i; j < arr.length; j++) {
      if (arr.slice(i, j + 1).reduce((acc, curr) => acc + curr, 0) > max)
        max = arr.slice(i, j + 1).reduce((acc, curr) => acc + curr, 0);
    }
  }
  return max;
};
