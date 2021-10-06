const inputData = [
  [2, 4, 0, 100, 4, 11, 2602, 36],
  [160, 3, 1719, 19, 11, 13, -21],
];

const findOutLier = (integers) => {
  const evens = integers.filter((int) => int % 2 == 0);
  const odds = integers.filter((int) => int % 2 != 0);
  return evens.length > odds.length ? odds[0] : evens[0];
};

inputData.forEach((array) => console.log(findOutLier(array)));
