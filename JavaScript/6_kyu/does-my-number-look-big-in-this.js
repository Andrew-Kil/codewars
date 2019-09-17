// https://www.codewars.com/kata/does-my-number-look-big-in-this/train/javascript

const narcissistic = value =>
  [...`${value}`].reduce((a, b) => a + Math.pow(+b, `${value}`.length), 0) ===
  value;
