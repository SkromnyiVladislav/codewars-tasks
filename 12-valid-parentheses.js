const inputData = [
  "()",
  ")(()))",
  "(",
  "(())((()())())",
  "()()()()()()()()(())()(())(()())(()(",
];

const validParentheses = (parens) => {
  for (let i = -1; i < parens.length; i++) {
    if (parens.length % 2 == 1 || parens[0] == ")") return false;
    for (let j = 0; j < parens.length; j++) parens = parens.replace("()", "");
  }
  return parens.length ? false : true;
};

inputData.forEach((input) => console.log(validParentheses(input)));
