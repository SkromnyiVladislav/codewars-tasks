const inputData = `In a village of La Mancha, the name of which I have no desire to call to
mind, there lived not long since one of those gentlemen that keep a lance
in the lance-rack, an old buckler, a lean hack, and a greyhound for
coursing. An olla of rather more beef than mutton, a salad on most
nights, scraps on Saturdays, lentils on Fridays, and a pigeon or so extra
on Sundays, made away with three-quarters of his income.`;

const topThreeWords = (text) => {
  let frequencies = [];

  let filtered = text.toLowerCase();
  const regex = / in|a /;
  filtered = filtered.replace(regex, " ");
  
  console.log(filtered);
};

console.log(topThreeWords(inputData));
