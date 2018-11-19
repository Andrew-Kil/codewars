// Write a function that returns both the minimum and maximum number of the given list/array.
const minMax = arr => {
  let minNum,
    maxNum,
    sortedArr = arr.sort((a, b) => {
      return a - b;
    });
  if (arr.length === 1) {
    return [arr[0], arr[0]];
  }
  return [arr[0], arr[arr.length - 1]];
};
