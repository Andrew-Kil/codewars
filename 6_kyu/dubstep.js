// https://www.codewars.com/kata/dubstep/train/javascript

const songDecoder = song => {
  let splitSong = song.split("WUB");
  let splitSong2 = "";
  for (let i = 0; i < splitSong.length; i++) {
    if (splitSong[i] !== "") {
      splitSong2 += splitSong[i];
    } else if (splitSong[i] === "") {
      continue;
    }
  }
  return splitSong2.split("").join(" ");
};
