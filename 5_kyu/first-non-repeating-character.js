// https://www.codewars.com/kata/52bc74d4ac05d0945d00054e/train/javascript

// Write a function named first_non_repeating_letter that takes a string input, and returns the first character that is not repeated anywhere in the string.

// For example, if given the input 'stress', the function should return 't', since the letter t only occurs once in the string, and occurs first in the string.

// As an added challenge, upper- and lowercase letters are considered the same character, but the function should return the correct case for the initial letter. For example, the input 'sTreSS' should return 'T'.

// If a string contains all repeating characters, it should return an empty string ("") or None -- see sample tests.

const firstNonRepeatingLetter = s => {
  const charMap = {};
  let unique = null;
  for (let char of [...s.toLowerCase()]) {
    charMap[char] = charMap[char] + 1 || 1;
  }
  for (let char in charMap) {
    if (charMap[char] === 1) {
      unique = char;
      break;
    }
  }
  if (unique === null) return "";
  for (let i = 0; i < s.length; i++) {
    if (s[i].toLowerCase() === unique) return s[i];
  }
};
