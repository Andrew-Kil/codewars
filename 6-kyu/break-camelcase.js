// https://www.codewars.com/kata/5208f99aee097e6552000148/train/javascript

// Complete the solution so that the function will break up camel casing, using a space between words.

// Example
// solution("camelCasing")  ==  "camel Casing"

const solution = string => {
  let curr = 0;
  const arr = [];
  [...string].forEach((l, i) => {
    if (l === l.toUpperCase()) {
      arr.push(string.slice(curr, i));
      curr = i;
    }
  });
  arr.push(string.slice(curr, string.length));
  return arr.join(" ");
};
