// https://www.codewars.com/kata/moving-zeros-to-the-end/train/javascript

// Write an algorithm that takes an array and moves all of the zeros to the end, preserving the order of the other elements.

// moveZeros([false,1,0,1,2,0,1,3,"a"]) // returns[false,1,1,2,1,3,"a",0,0]

const moveZeros = arr => {
  const zeros = arr.filter(el => el === 0);
  const others = arr.filter(el => el !== 0);
  return [...others, ...zeros];
};
