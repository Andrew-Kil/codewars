// https://www.codewars.com/kata/weird-string-case/train/javascript

const toWeirdCase = string => {
  let words = string.split(" ");
  let answer = [];
  words.forEach(word => {
    let newWord = "";
    for (let i = 0; i < word.length; i++) {
      i % 2 === 0 ? (newWord += word[i].toUpperCase()) : (newWord += word[i]);
    }
    console.log(newWord);
    answer.push(newWord);
  });
  return answer.join(" ");
};

console.log(toWeirdCase("hi my name is bob"));
