// Write function RemoveExclamationMarks which removes all exclamation marks from a given string.

function removeExclamationMarks(s) {
  let arr1 = s.split("");
  let arr2 = [];
  for (let i = 0; i < arr1.length; i++) {
    if (arr1[i] !== "!") {
      arr2.push(arr1[i]);
    }
  }
  return arr2.join("");
}
