// https://www.codewars.com/kata/pete-the-baker/train/javascript

const cakes = (recipe, available) => {
  const maxServings = {};
  for (let ingredient in recipe) {
    if (available[ingredient]) {
      maxServings[ingredient] = Math.floor(
        available[ingredient] / recipe[ingredient]
      );
    } else {
      return 0;
    }
  }
  return Object.values(maxServings).sort((a, b) => a - b)[0];
};
