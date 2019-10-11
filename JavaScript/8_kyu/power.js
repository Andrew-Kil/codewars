const numberToPower = (num, pow) => {
  let product = 1;
  while (pow) {
    product *= num;
    pow--;
  }
  return product;
};
