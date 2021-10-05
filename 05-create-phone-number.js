const inputData = [
  [1, 2, 3, 4, 5, 6, 7, 8, 9, 0],
  [1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
  [1, 2, 3, 4, 5, 6, 7, 8, 9, 0],
];

const createPhoneNumber = (num) => {
  let str1 = "",
    str2 = "",
    str3 = "";

  num.forEach((num, i) => {
    // console.log(i)
    if (i < 3) str1 += num;
    else if (i < 6) str2 += num;
    else str3 += num;
  });

  return `(${str1}) ${str2}-${str3}`;
};

inputData.forEach((line) => console.log(createPhoneNumber(line)));
