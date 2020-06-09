// https://www.codewars.com/kata/5420fc9bb5b2c7fd57000004/train/javascript

// Complete the method which returns the number which is most frequent in the given input array. If there is a tie for most frequent number, return the largest number among them.

// Note: no empty arrays will be given.

// Examples
// [12, 10, 8, 12, 7, 6, 4, 10, 12]              -->  12
// [12, 10, 8, 12, 7, 6, 4, 10, 12, 10]          -->  12
// [12, 10, 8, 8, 3, 3, 3, 3, 2, 4, 10, 12, 10]  -->   3

const highestRank = (arr) => {
  const obj = arr.reduce((acc, curr) => {
    return { ...acc, [curr]: acc[curr] ? acc[curr] + 1 : 1 };
  }, {});
  return Object.keys(obj).reduce((a, b) => (obj[a] > obj[b] ? +a : +b));
};
