// https://www.codewars.com/kata/iq-test/train/javascript

const iqTest = input => {
  const splitInput = input.split(" ");
  let even = [],
    odd = [];
  for (let i = 0; i < splitInput.length; i++) {
    splitInput[i] % 2 ? odd.push(i + 1) : even.push(i + 1);
  }
  return even.length === 1 ? even[0] : odd[0];
};
