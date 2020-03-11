// https://www.codewars.com/kata/highest-scoring-word/train/javascript

const high = x => {
  const arrX = x.split(" ");
  const hashmap = {
    a: 1,
    b: 2,
    c: 3,
    d: 4,
    e: 5,
    f: 6,
    g: 7,
    h: 8,
    i: 9,
    j: 10,
    k: 11,
    l: 12,
    m: 13,
    n: 14,
    o: 15,
    p: 16,
    q: 17,
    r: 18,
    s: 19,
    t: 20,
    u: 21,
    v: 22,
    w: 23,
    x: 24,
    y: 25,
    z: 26
  };
  const pointsObj = {};
  for (let i = 0; i < arrX.length; i++) {
    let points = 0;
    for (let j = 0; j < arrX[i].length; j++) {
      points += hashmap[arrX[i][j]];
    }
    pointsObj[points] = arrX[i];
  }
  const sortedKeys = Object.keys(pointsObj).sort((a, b) => b - a);
  return pointsObj[sortedKeys[0]];
};
