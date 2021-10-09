const rgb = (r, g, b) => `${hex(r)+hex(g)+hex(b)}`;
const hex = (n) => {
  if(n < 0) return `00`;
  if(n > 255) n = 255;
  const hexStr = n.toString(16).toUpperCase();
  return hexStr.length == 1 ? `0${hexStr}` : hexStr;
};

console.log(rgb(148, 300, 255))
