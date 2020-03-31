// https://www.codewars.com/kata/thinkful-number-drills-pixelart-planning/train/javascript

const isDivisible = (wallLength, pixelSize) => {
  return (wallLength / pixelSize) % 1 === 0 ? true : false;
};
