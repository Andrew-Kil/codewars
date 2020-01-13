// https://www.codewars.com/kata/simple-pig-latin/train/javascript

// Move the first letter of each word to the end of it, then add "ay" to the end of the word. Leave punctuation marks untouched.

// Examples
// pigIt('Pig latin is cool'); // igPay atinlay siay oolcay
// pigIt('Hello world !');     // elloHay orldway !

const pigIt = str => {
  const words = str.split(" ");
  const punctuations = [".", ",", "!", "?"];
  return words
    .map(word => {
      if (punctuations.includes(word)) {
        return word;
      } else {
        const firstLetter = word[0];
        const restOfWord = word.slice(1);
        return restOfWord + firstLetter + "ay";
      }
    })
    .join(" ");
};
