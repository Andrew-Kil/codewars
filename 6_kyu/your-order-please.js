// https://www.codewars.com/kata/your-order-please/train/javascript

const order = sentence => {
  const words = sentence.split(' ');
  let output = [];
  for (let i = 1; i <= 9; i++) {
    const word = words.find(el => el.includes(i));
    if (word) output.push(word);
  }
  return output.join(' ');
}