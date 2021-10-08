const inputData = [1, 62, 120, 3600, 3662, 63075725];

const formatDuration = (seconds) => {
  if (!seconds) return `now`;

  const valueNames = ["year", "day", "hour", "minute", "second"];
  const dividers = [31536000, 86400, 3600, 60, 1];
  const calculatedValues = [0, 0, 0, 0, 0];

  // Calculate values
  dividers.forEach((divider, index) => {
    if (seconds >= divider) {
      calculatedValues[index] = Math.floor(seconds / divider);
      seconds = seconds % divider;
    }
  });

  // Constuct output string
  const valueIndexes = [];

  calculatedValues.forEach((value, index) => {
    if (value) valueIndexes.push(index);
  });

  const valueCount = valueIndexes.length;

  // First value
  let index = valueIndexes[0];
  let value = calculatedValues[index];
  let name = valueNames[index];
  const firstValue = `${value} ${value > 1 ? name + "s" : name}`;

  if (valueIndexes.length == 1) return firstValue;

  // Last value
  index = valueIndexes[valueIndexes.length - 1];
  value = calculatedValues[index];
  name = valueNames[index];
  const lastValue = ` and ${value} ${value > 1 ? name + "s" : name}`;
  valueIndexes.forEach((valueIndex, i) => {});

  if (valueIndexes.length == 2) return firstValue + lastValue;

  // Middle values
  let middleValues = "";

  for (let i = 1; i < valueIndexes.length -1; i++) {
    index = valueIndexes[i];
    value = calculatedValues[index];
    name = valueNames[index];
    middleValues += `, ${value} ${value > 1 ? name + "s" : name}`;
  }

  return firstValue + middleValues + lastValue;
};

inputData.forEach((data) => console.log(formatDuration(data)));
