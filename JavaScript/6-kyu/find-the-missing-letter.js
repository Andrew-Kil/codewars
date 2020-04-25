// https://www.codewars.com/kata/find-the-missing-letter/train/javascript

// #Find the missing letter

// Write a method that takes an array of consecutive (increasing) letters as input and that returns the missing letter in the array.

// You will always get an valid array. And it will be always exactly one letter be missing. The length of the array will always be at least 2.
// The array will always contain letters in only one case.

// Example:

// ['a','b','c','d','f'] -> 'e' ['O','Q','R','S'] -> 'P'

// ["a","b","c","d","f"] -> "e"
// ["O","Q","R","S"] -> "P"
// (Use the English alphabet with 26 letters!)

// Have fun coding it and please don't forget to vote and rank this kata! :-)

// I have also created other katas. Take a look if you enjoyed this kata!

const findMissingLetter = array => {
  const alphabet = {
      a: 0,
      b: 1,
      c: 2,
      d: 3,
      e: 4,
      f: 5,
      g: 6,
      h: 7,
      i: 8,
      j: 9,
      k: 10,
      l: 11,
      m: 12,
      n: 13,
      o: 14,
      p: 15,
      q: 16,
      r: 17,
      s: 18,
      t: 19,
      u: 20,
      v: 21,
      w: 22,
      x: 23,
      y: 24,
      z: 25
    },
    charIdx = array.map(char => alphabet[char.toLowerCase()]),
    isLowerCase = array[0] === array[0].toLowerCase();
  let missingIdx;
  for (let i = 1; i < charIdx.length; i++) {
    if (charIdx[i] - charIdx[i - 1] !== 1) missingIdx = charIdx[i] - 1;
  }
  const findKeyOfIdx = Object.keys(alphabet).find(
    key => alphabet[key] === missingIdx
  );
  return isLowerCase ? findKeyOfIdx : findKeyOfIdx.toUpperCase();
};
