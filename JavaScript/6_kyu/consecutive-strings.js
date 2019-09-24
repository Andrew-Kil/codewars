// https://www.codewars.com/kata/consecutive-strings/train/javascript

const longestConsec = (strarr, k) => {
  if (strarr.length === 0 || k > strarr.length || k <= 0) return "";
  let longest = "";
  for (let i = 0; i <= strarr.length - k; i++) {
    let test = strarr.slice(i, i + k);
    if (test.join("").length > longest.length) longest = test.join("");
  }
  return longest;
};
