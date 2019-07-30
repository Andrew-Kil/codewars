function reverseWords(str) {
  let splitStr = str.split(" ");
  let finalArr = [];
  for (let i = splitStr.length - 1; i >= 0; i--) {
    finalArr.push(splitStr[i]);
  }
  return finalArr.join(" ");
}
