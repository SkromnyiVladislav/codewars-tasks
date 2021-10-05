const inputData = [
  [
    [45, 12],
    [55, 21],
    [19, -2],
    [104, 20],
  ],
  [
    [3, 12],
    [55, 1],
    [91, -2],
    [53, 23],
  ],
  [
    [59, 12],
    [55, -1],
    [12, -2],
    [12, 12],
  ],
];

function openOrSenior(data) {
  let output = [];

  data.forEach((entry) => {
    const [age, handicap] = entry;
    age >= 55 && handicap > 7 ? output.push("Senior") : output.push("Open");
  });

  return output;
}

// Testing
inputData.forEach(line => {
  console.log(openOrSenior(line));
})
