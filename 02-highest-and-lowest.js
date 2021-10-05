const inputData = ["1 2 3 4 5", "1 2 -3 4 5", "1 9 3 4 -5"];
const highAndLow = (input) => {
  let numbers = [];
  let high, low;

  // Conversion
  const strings = input.split(" ");
  strings.map((string) => numbers.push(parseInt(string)));

  high = low = numbers[0];
  numbers.forEach(number => {
    if (high < number) high = number;
    if (low > number) low = number;
  })

  return `${high} ${low}`;
};

inputData.forEach((line) => console.log(highAndLow(line)));
