// https://www.codewars.com/kata/longest-palindrome/train/javascript

const longestPalindrome = str => {
  if (str.length === 0) return 0;
  const longest = [];
  for (let i = 0; i < str.length; i++) {
    for (let j = i; j < str.length + 1; j++) {
      if (isPalindrome(str.substring(i, j)))
        longest.push(str.substring(i, j).length);
    }
  }
  return Math.max(...longest);
};

const isPalindrome = subStr => {
  return (
    subStr ===
    subStr
      .split("")
      .reverse()
      .join("")
  );
};
