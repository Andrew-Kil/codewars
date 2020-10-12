// https://www.codewars.com/kata/5276c18121e20900c0000235/train/javascript

// You're working in a number zoo, and it seems that one of the numbers has gone missing!

// Zoo workers have no idea what number is missing, and are too incompetent to figure it out, so they're hiring you to do it for them.

// In case the zoo loses another number, they want your program to work regardless of how many numbers there are in total.

// Task:
// Write a function that takes a shuffled list of unique numbers from 1 to n with one element missing (which can be any number including n). Return this missing number.

// Note: huge lists will be tested.

// Examples:
// [1, 3, 4]  =>  2
// [1, 2, 3]  =>  4
// [4, 2, 3]  =>  1

const findNumber = (array) => {
  return expectedSum(array.length + 1) - actualSum(array);
};

const expectedSum = (len) => {
  let sum = 0;
  for (let i = 1; i <= len; i++) {
    sum += i;
  }
  return sum;
};

const actualSum = (array) => {
  return array.reduce((acc, cur) => acc + cur, 0);
};
