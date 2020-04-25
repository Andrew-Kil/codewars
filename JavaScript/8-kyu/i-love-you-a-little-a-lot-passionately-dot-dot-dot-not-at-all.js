// https://www.codewars.com/kata/i-love-you-a-little-a-lot-passionately-dot-dot-dot-not-at-all/train/javascript/5ba79607c22b7966f1000145

const a = [
  "not at all",
  "I love you",
  "a little",
  "a lot",
  "passionately",
  "madly"
];

const howMuchILoveYou = n => a[n % 6];
