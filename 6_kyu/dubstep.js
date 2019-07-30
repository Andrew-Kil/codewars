// https://www.codewars.com/kata/dubstep/train/javascript

const songDecoder = song => {
  return song
    .split("WUB")
    .filter(word => word)
    .join(" ");
};
