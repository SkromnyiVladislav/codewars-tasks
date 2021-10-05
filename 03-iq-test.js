const inputData = ["2 4 7 8 10", "1 2 1 1", "1 2 2"];

const iqTest = (line) => {
  const numbers = line.split(" ").map(Number);

  const odds = numbers.filter((n) => n % 2);
  const evens = numbers.filter((n) => !(n % 2));

  const single = odds.length > evens.length ? evens[0] : odds[0];
  let index = 0;
  numbers.forEach((n, i) => {
    if (n == single) index = i;
  });

  return index+1;
};

inputData.forEach((data) => console.log(iqTest(data)));
