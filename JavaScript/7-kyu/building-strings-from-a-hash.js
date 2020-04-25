// https://www.codewars.com/kata/building-strings-from-a-hash/train/javascript

const solution = pairs => {
  let ans = "";
  const keys = Object.keys(pairs);
  const values = Object.values(pairs);
  for (let i = 0; i < keys.length; i++) {
    if (i === keys.length - 1) {
      ans += `${keys[i]} = ${values[i]}`;
    } else {
      ans += `${keys[i]} = ${values[i]},`;
    }
  }
  return ans;
};
