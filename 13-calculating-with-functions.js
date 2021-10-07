const zero = (par) => (par ? eval(`Math.floor(0${par})`) : `0`);
const one = (par) => (par ? eval(`Math.floor(1${par})`) : `1`);
const two = (par) => (par ? eval(`Math.floor(2${par})`) : `2`);
const three = (par) => (par ? eval(`Math.floor(3${par})`) : `3`);
const four = (par) => (par ? eval(`Math.floor(4${par})`) : `4`);
const five = (par) => (par ? eval(`Math.floor(5${par})`) : `5`);
const six = (par) => (par ? eval(`Math.floor(6${par})`) : `6`);
const seven = (par) => (par ? eval(`Math.floor(7${par})`) : `7`);
const eight = (par) => (par ? eval(`Math.floor(8${par})`) : `8`);
const nine = (par) => (par ? eval(`Math.floor(9${par})`) : `9`);

const plus = (par) => `+${par}`;
const minus = (par) => `-${par}`;
const times = (par) => `*${par}`;
const dividedBy = (par) => `/${par}`;

// console.log(seven(times(five())));
console.log(two(plus(one())));
