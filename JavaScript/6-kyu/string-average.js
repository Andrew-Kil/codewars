// https://www.codewars.com/kata/5966847f4025872c7d00015b/train/javascript

// You are given a string of numbers between 0-9. Find the average of these numbers and return it as a floored whole number (ie: no decimal places) written out as a string. Eg:

// "zero nine five two" -> "four"

// If the string is empty or includes a number greater than 9, return "n/a"

const obj = {
  zero: 0,
  one: 1,
  two: 2,
  three: 3,
  four: 4,
  five: 5,
  six: 6,
  seven: 7,
  eight: 8,
  nine: 9,
};

const areNumsInRange = (nums) => nums.every((num) => obj[num] !== undefined);

const averageString = (str) => {
  if (!str || !areNumsInRange(str.split(" "))) return "n/a";
  const sum = str.split(" ").reduce((acc, cur) => acc + obj[cur], 0);
  const avg = sum / str.split(" ").length;
  const flooredAvg = Math.floor(avg);
  const idx = Object.values(obj)[flooredAvg];
  return Object.keys(obj)[idx];
};
