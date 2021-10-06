const inputData = [
  ["a", "b", "c", "d", "f"],
  ["O", "Q", "R", "S"],
];

const findMissingLetter = (arr) => {
  for (let i = 0; i < arr.length - 1; i++) {
    const char1 = arr[i].charCodeAt();
    const char2 = arr[i + 1].charCodeAt();

    if (char2 - char1 > 1) return String.fromCharCode(char1 + 1);
  }
};

inputData.forEach((arr) => console.log(findMissingLetter(arr)));
