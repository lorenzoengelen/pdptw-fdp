const Matrix = function(m, n) {
  // m rows
  let mtrx = new Array(m);
  // n columns
  for (let i = 0; i < m; i++) {
    mtrx[i] = new Array(n);
  }
  return mtrx; 
};

module.exports = Matrix;