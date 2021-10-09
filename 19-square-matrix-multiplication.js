const matrixMultiplication = (a, b) => {
  const n = a.length;
  const c = [];

  for (let i = 0; i < n; i++) {
    c.push([]);
    for (let j = 0; j < n; j++) {
      c[i].push(0)
      for( let k = 0; k < n; k++) {
        c[i][j] += a[i][k] * b[k][j];
      }
    }
  }

  return c;
};

console.log(
  matrixMultiplication(
    [
      [1, 2],
      [3, 2],
    ],
    [
      [3, 2],
      [1, 1],
    ]
  )
);
