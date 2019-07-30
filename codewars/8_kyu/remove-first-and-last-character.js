function removeChar(str) {
  let output = "";
  for (let i = 1; i < str.length - 1; i++) {
    output += str[i];
  }
  return output;
}
