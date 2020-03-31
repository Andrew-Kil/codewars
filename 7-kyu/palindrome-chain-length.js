// https://www.codewars.com/kata/palindrome-chain-length/train/javascript

const palindromeChainLength = n => {
  let intNum = n;
  let strNum = n.toString();
  let revNum = strNum
    .split("")
    .reverse()
    .join("");
  let counter = 0;
  while (strNum !== revNum) {
    intNum += Number(revNum);
    strNum = intNum.toString();
    revNum = strNum
      .split("")
      .reverse()
      .join("");
    counter++;
  }
  return counter;
};
