// https://www.codewars.com/kata/all-star-code-challenge-number-18/train/javascript

const strCount = (word, ltr) =>
  [...word].reduce((acc, char) => acc + +(char == ltr), 0);
