// https://www.codewars.com/kata/566d5e2e57d8fae53c00000c/train/javascript

// After yet another dispute on their game the Bingo Association decides to change course and automate the game.

// Can you help the association by writing a method to create a random Bingo card?

// Bingo Cards
// A Bingo card contains 24 unique and random numbers according to this scheme:

// 5 numbers from the B column in the range 1 to 15
// 5 numbers from the I column in the range 16 to 30
// 4 numbers from the N column in the range 31 to 45
// 5 numbers from the G column in the range 46 to 60
// 5 numbers from the O column in the range 61 to 75
// Task
// Write the function get_card()/getCard(). The card must be returned as an array of Bingo style numbers:

// [ 'B14', 'B12', 'B5', 'B6', 'B3', 'I28', 'I27', ... ]
// The numbers must be in the order of their column: B, I, N, G, O. Within the columns the order of the numbers is random.

const getCard = () => [
  ...generateRandomNumbers("B", 5, 1, 15),
  ...generateRandomNumbers("I", 5, 16, 30),
  ...generateRandomNumbers("N", 4, 31, 45),
  ...generateRandomNumbers("G", 5, 46, 60),
  ...generateRandomNumbers("O", 5, 61, 75),
];

const generateRandomNumbers = (column, count, min, max) => {
  const range = generateRange(min, max);
  const randomNumbers = [];
  while (count > 0) {
    const randomNum = range[Math.floor(Math.random() * range.length)];
    randomNumbers.push(`${column}${randomNum}`);
    range.splice(range.indexOf(randomNum), 1);
    count--;
  }
  return randomNumbers;
};

const generateRange = (min, max) => [...Array(max + 1).keys()].slice(min);
