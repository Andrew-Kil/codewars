// https://www.codewars.com/kata/convert-string-to-camel-case/train/javascript

const toCamelCase = str => {
  let splitStr;
  let ans = "";
  if (str === "") return "";
  if (str.includes("-")) splitStr = str.split("-");
  if (str.includes("_")) splitStr = str.split("_");
  splitStr[0][0] === splitStr[0][0].toUpperCase
    ? (ans += splitStr[0][0].toUpperCase() + splitStr[0].slice(1))
    : (ans += splitStr[0]);
  for (let i = 1; i < splitStr.length; i++) {
    ans += splitStr[i][0].toUpperCase() + splitStr[i].slice(1);
  }
  return ans;
};
