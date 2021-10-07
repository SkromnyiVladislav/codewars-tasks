const inputData = [
  [false, 1, 0, 1, 2, 0, 1, 3, "a"],
  [1, 2, 0, 1, 0, 1, 0, 3, 0, 1],
];

const moveZeros = (arr) => {
  const res = arr.filter((item) => item !== 0);
  while (res.length < arr.length) res.push(0);
  return res;
};

inputData.forEach((data) => console.log(moveZeros(data)));
