// https://www.codewars.com/kata/rot13/train/javascript

// ROT13 is a simple letter substitution cipher that replaces a letter with the letter 13 letters after it in the alphabet. ROT13 is an example of the Caesar cipher.

// Create a function that takes a string and returns the string ciphered with Rot13. If there are numbers or special characters included in the string, they should be returned as they are. Only letters from the latin/english alphabet should be shifted, like in the original Rot13 "implementation".

const isLetter = char => char.toLowerCase() !== char.toUpperCase();

const isLetterLowerCaseMToZ = letter =>
  letter.charCodeAt() > 109 && letter.charCodeAt() <= 122;

const isLetterUpperCaseMToZ = letter =>
  letter.charCodeAt() > 77 && letter.charCodeAt() <= 90;

const rotateChars = char =>
  isLetterLowerCaseMToZ(char) || isLetterUpperCaseMToZ(char)
    ? String.fromCharCode(char.charCodeAt() - 13)
    : String.fromCharCode(char.charCodeAt() + 13);

const rot13 = message => {
  let result = "";
  [...message].forEach(char =>
    isLetter(char) ? (result += rotateChars(char)) : (result += char)
  );
  return result;
};
