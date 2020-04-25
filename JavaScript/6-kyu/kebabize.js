// https://www.codewars.com/kata/57f8ff867a28db569e000c4a/train/javascript

// Modify the kebabize function so that it converts a camel case string into a kebab case.

// kebabize('camelsHaveThreeHumps') // camels-have-three-humps
// kebabize('camelsHave3Humps') // camels-have-humps
// Notes:

// the returned string should only contain lowercase letters

const kebabize = str => {
  let result = "";
  const numbers = Array.from(Array(10).keys());
  for (let char of str) {
    if (numbers.includes(+char)) continue;
    if (char === char.toUpperCase() && !numbers.includes(+char)) {
      result += "-" + char.toLowerCase();
      continue;
    }
    result += char;
  }
  return result[0] === "-" ? result.slice(1) : result;
};
