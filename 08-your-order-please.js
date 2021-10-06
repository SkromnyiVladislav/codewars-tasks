const inputData = ["is2 Thi1s T4est 3a", "4of Fo1r pe6ople g3ood th5e the2"];

const order = (words) => {
  const wordsArr = words.split(" ");
  const res = [];
  for (let i = 1; i <= wordsArr.length; i ++){
    wordsArr.forEach(word => {
      if(word.includes(i)) res.push(word);
    })
  }

  return res.join(" ");
};

inputData.forEach((data) => console.log(order(data)));
