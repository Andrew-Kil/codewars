// https://www.codewars.com/kata/515f51d438015969f7000013/train/javascript

// Write a function that when given a number >= 0, returns an Array of ascending length subarrays.

// pyramid(0) => [ ]
// pyramid(1) => [ [1] ]
// pyramid(2) => [ [1], [1, 1] ]
// pyramid(3) => [ [1], [1, 1], [1, 1, 1] ]
// Note: the subarrays should be filled with 1s

function pyramid(n) {
  const arr = [];
  let count = 1;
  while (count <= n) {
    arr.push(Array(count).fill(1));
    count++;
  }
  return arr;
}
