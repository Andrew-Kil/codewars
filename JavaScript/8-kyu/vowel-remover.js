// Create a function called shortcut to remove all the lowercase vowels in a given string.
const shortcut = string => {
  const vowels = ["a", "e", "i", "o", "u"];
  let arrStr = string.split(""),
    ans = "";
  for (let i = 0; i < arrStr.length; i++) {
    if (!vowels.includes(arrStr[i])) {
      ans += arrStr[i];
    }
  }
  return ans;
};
