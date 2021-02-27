// https://www.codewars.com/kata/57a5015d72292ddeb8000b31/train/javascript

// Palindrome strings
// A palindrome is a word, phrase, number, or other sequence of characters which reads the same backward or forward. This includes capital letters, punctuation, and word dividers.

// Implement a function that checks if something is a palindrome.

const isPalindrome = (line) => line === [...line].reverse().join("");
