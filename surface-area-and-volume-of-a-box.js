// Write a function that returns the total surface area and volume of a box as an array: [area, volume].
// volume: w * h * d
// area: 2(w * h) + 2(w * d) + 2(h * d)
function getSize(width, height, depth) {
  let volume = width * height * depth;
  let area = width * height * 2 + width * depth * 2 + height * depth * 2;
  let finalArray = [];
  finalArray.push(area, volume);
  return finalArray;
}
