// https://www.codewars.com/kata/55d5434f269c0c3f1b000058/train/javascript

// Write a function

// tripledouble(num1,num2)
// which takes numbers num1 and num2 and returns 1 if there is a straight triple of a number at any place in num1 and also a straight double of the same number in num2.

// If this isn't the case, return 0

// Examples
// tripledouble(451999277, 41177722899) == 1 // num1 has straight triple 999s and
//                                           // num2 has straight double 99s

// tripledouble(1222345, 12345) == 0 // num1 has straight triple 2s but num2 has only a single 2

// tripledouble(12345, 12345) == 0

// tripledouble(666789, 12345667) == 1

const tripledouble = (num1, num2) => {
  (num1 = [...`${num1}`]), (num2 = [...`${num2}`]);
  const triple = [];
  for (let i = 0; i < num1.length - 2; i++) {
    let chunk = new Set(num1.slice(i, i + 3));
    if (chunk.size === 1) triple.push(num1[i]);
  }
  if (triple === null) return 0;
  for (let j = 0; j < num2.length - 1; j++) {
    let chunk = new Set(num2.slice(j, j + 2));
    if (chunk.size === 1 && triple.includes(num2[j])) return 1;
  }
  return 0;
};
