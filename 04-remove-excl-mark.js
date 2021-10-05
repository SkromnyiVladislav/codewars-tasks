const inputData = [
  "Hi!", "Hi!!!", "!Hi", "!Hi!", "Hi! Hi!", "Hi"
];

const remove = str => str.charAt(str.length-1) === '!' ? str.substr(0, str.length-1) : str;


inputData.forEach(input => console.log(remove(input)));