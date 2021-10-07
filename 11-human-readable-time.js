const inputData = [0, 5, 60, 86399, 359999];

const humanReadable = (seconds) => {
  const hh = Math.floor(seconds / 3600);
  const mm = Math.floor((seconds - (hh * 3600)) / 60);
  const ss = seconds - (hh * 3600 + mm * 60);

  const HH = hh < 10 ? `0${hh}` : `${hh}`;
  const MM = mm < 10 ? `0${mm}` : `${mm}`;
  const SS = ss < 10 ? `0${ss}` : `${ss}`;

  return `${HH}:${MM}:${SS}`
};

inputData.forEach((input) => console.log(humanReadable(input)));
