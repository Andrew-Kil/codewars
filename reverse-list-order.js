// In this kata you will create a function that takes in a list and returns a list with the reverse order.
function reverseList(list) {
  let finalArray = [];
  for(let i = list.length - 1; i >= 0; i--) {
    finalArray.push(list[i]);
  }
  return finalArray;
}
