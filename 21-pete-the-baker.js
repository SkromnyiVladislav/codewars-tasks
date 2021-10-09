const cakes = (recipe, available) => {
  const ingredients = [];
  Object.entries(recipe).forEach((ingredient) => {
    const availableCount = Math.floor(available[ingredient[0]] / ingredient[1]);
    availableCount ? ingredients.push(availableCount) : ingredients.push(0);
  });
  return ingredients.length ? ingredients.sort((a, b) => a - b)[0] : 0;
};

console.log(
  cakes(
    { chocolate: 14, eggs: 68, sugar: 92 },
    {
      oil: 9600,
      crumbles: 2300,
      flour: 2300,
      apples: 7700,
      chocolate: 7500,
      nuts: 1500,
      cocoa: 5100,
      eggs: 8700,
      milk: 6100,
      cream: 7200,
      pears: 5000,
      butter: 3800,
      sugar: 8800,
    }
  )
);
