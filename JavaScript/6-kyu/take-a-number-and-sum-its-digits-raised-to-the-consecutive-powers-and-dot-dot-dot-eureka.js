const sumDigPow = (a, b) => {
  const result = [];
  for (let i = a; i <= b; i++) {
    if (`${i}`.length > 1) {
      let sum = 0;
      for (let j = 0; j < `${i}`.length; j++) {
        sum += Math.pow(+`${i}`[j], j + 1);
      }
      if (sum === i) result.push(i);
    } else {
      result.push(i);
    }
  }
  return result;
};
