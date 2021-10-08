const inputData = [
  "",
  "do We have A Hashtag",
  "Codewars",
  "Codewars is nice",
  " Hello there thanks for trying my Kata",
];

const generateHashtag = (str) => {
  if (!str.length) return false;
  const upper = [];
  const words = str.split(" ").filter((word) => word || word.length);
  words.forEach((word) =>
    upper.push(
      `${word[0].toUpperCase()}${
        word.length > 1 ? word.substring(1, word.length) : ""
      }`
    )
  );
  const hashtag = `#${upper.join("")}`;
  return hashtag.length < 141 && hashtag.length > 1 ? hashtag : false;
};

inputData.forEach((data) => console.log(generateHashtag(data)));
