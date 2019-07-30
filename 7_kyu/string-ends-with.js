// https://www.codewars.com/kata/string-ends-with/train/javascript
const solution = (str, end) => {
    const endLength = end.length;
    return end === str.slice(str.length - endLength, str.length);
}