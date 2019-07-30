// https://www.codewars.com/kata/count-characters-in-your-string/train/javascript

const count = string => {
  let answer = {};
  for (let i = 0; i < string.length; i++) {
    !answer[string[i]] ? (answer[string[i]] = 1) : answer[string[i]]++;
  }
  return answer;
};
count("hello");
