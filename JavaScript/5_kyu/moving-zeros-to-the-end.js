// https://www.codewars.com/kata/moving-zeros-to-the-end/train/javascript

const moveZeros = arr => {
  const zeros = arr.filter(el => el === 0);
  const others = arr.filter(el => el !== 0);
  return [...others, ...zeros];
};
