const Matrix = function(m, n) {
  n = n || m;
  // m rows
  this.mtrx = new Array(m);
  // n columns
  for (let i = 0; i < m; i++) {
    this.mtrx[i] = new Array(n);
  }
  return this.mtrx; 
};

module.exports = Matrix;