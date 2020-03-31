// https://www.codewars.com/kata/treasure-box/train/javascript

const findNum = str => {
  const newStr = str
    .split(" ")
    .join("")
    .replace(",", "")
    .toLowerCase();
  const nums = {
    one: 1,
    two: 2,
    three: 3,
    four: 4,
    five: 5,
    six: 6,
    seven: 7,
    eight: 8,
    nine: 9,
    ten: 10
  };
  for (let i = 0; i < Object.keys(nums).length; i++)
    if (newStr.includes(Object.keys(nums)[i]))
      return nums[Object.keys(nums)[i]];
  return 0;
};
