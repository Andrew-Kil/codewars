// https://www.codewars.com/kata/534ffb35edb1241eda0015fe/train/javascript

// Complete the function that determines the score of a hand in the card game Blackjack (aka 21).

// The function receives an array of strings that represent each card in the hand ("2", "3", ..., "10", "J", "Q", "K" or "A") and should return the score of the hand (integer).

// Scoring rules:
// Number cards count as their face value (2 through 10). Jack, Queen and King count as 10. An Ace can be counted as either 1 or 11.

// Return the highest score of the cards that is less than or equal to 21. If there is no score less than or equal to 21 return the smallest score more than 21.

// Examples
// ["A"]                           ==>  11
// ["A", "J"]                      ==>  21
// ["A", "10", "A"]                ==>  12
// ["5", "3", "7"]                 ==>  15
// ["5", "4", "3", "2", "A", "K"]  ==>  25

const calculateScore = card => {
  const faceCards = ["J", "Q", "K"];
  if (card === "A") return 11;
  if (faceCards.includes(card)) return 10;
  return +card;
};

const scoreHand = cards => {
  let aces = cards.filter(card => card === "A").length;
  let score = cards.reduce((acc, curr) => acc + calculateScore(curr), 0);
  while (score > 21 && aces > 0) {
    (score -= 10), (aces -= 1);
  }
  return score;
};
