// https://www.codewars.com/kata/jaden-casing-strings/train/javascript

String.prototype.toJadenCase = function(string) {
  let wordsArr = this.split(" ");
  let ans = [];
  for (let i = 0; i < wordsArr.length; i++) {
    wordsArr[i][0] !== wordsArr[i][0].toUpperCase()
      ? ans.push(wordsArr[i][0].toUpperCase() + wordsArr[i].slice(1))
      : ans.push(wordsArr[i]);
  }
  return ans.join(" ");
};
