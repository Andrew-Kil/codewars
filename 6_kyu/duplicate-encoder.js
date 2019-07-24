// https://www.codewars.com/kata/duplicate-encoder/train/javascript

const duplicateEncode = word => {
  let lcWord = word.toLowerCase();
  let charCount = {};
  let answer = "";
  for (let char of lcWord) {
    charCount[char] ? charCount[char]++ : (charCount[char] = 1);
  }
  for (let char of lcWord) {
    charCount[char] > 1 ? (answer += ")") : (answer += "(");
  }
  return answer;
};
