// https://www.codewars.com/kata/caffeine-script/train/javascript

const caffeineBuzz = n => {
  let ans = "";
  if (n % 3 === 0 && n % 4 === 0) {
    ans += "Coffee";
  } else if (n % 3 === 0) {
    ans += "Java";
  } else {
    return "mocha_missing!";
  }
  if (
    (n % 3 === 0 && n % 4 === 0 && n % 2 === 0) ||
    (n % 3 === 0 && n % 2 === 0)
  ) {
    ans += "Script";
  }
  return ans;
};
