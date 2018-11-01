// Implement the function unique_in_order which takes as argument a sequence and returns a list of items without any elements with the same value next to each other and preserving the original order of elements.
const uniqueInOrder = iterable => {
  let ans = [],
    count = -1;
  for (let i = 0; i < iterable.length; i++) {
    if (ans[count] !== iterable[i]) {
      ans.push(iterable[i]);
      count++;
    }
  }
  return ans;
};
