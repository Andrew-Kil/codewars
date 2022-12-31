// https://www.codewars.com/kata/58d76854024c72c3e20000de/train/javascript

// Reverse every other word in a given string, then return the string. Throw away any leading or trailing whitespace, while ensuring there is exactly one space between each word. Punctuation marks should be treated as if they are a part of the word in this kata.

const reverse = (str) =>
  str
    .trim()
    .split(" ")
    .reduce(
      (acc, cur, idx) =>
        idx % 2 === 1
          ? (acc += [...cur].reverse().join("") + " ")
          : (acc += cur + " "),
      ""
    )
    .slice(0, -1);
