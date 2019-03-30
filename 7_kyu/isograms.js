// https://www.codewars.com/kata/isograms/train/javascript

const isIsogram = string => {
  const letterArray = string.split("");
  const letters = [];

  for (let i = 0; i < letterArray.length; i++) {
    if (!letters.includes(letterArray[i].toLowerCase())) {
      letters.push(letterArray[i].toLowerCase());
    } else {
      return false;
    }
  }

  return true;
};
