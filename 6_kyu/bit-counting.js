// https://www.codewars.com/kata/bit-counting/train/javascript

const countBits = int => {
  let binInt = int.toString(2).split("");
  let oneBits = 0;
  binInt.filter(el => {
    el === "1" ? oneBits++ : "";
  });
  return oneBits;
};
