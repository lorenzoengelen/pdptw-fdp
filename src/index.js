const Solver = require('./models/Solver.js');

var status = {
  execStatus: null,
  solverStartTime: null,
  solverEndTime: null,
  totalDistance: null
};

exports.solve = (instance) => {
  status.solverStartTime = Date.now();

  const solver = new Solver();
  solver.solve(instance, 30);

  return this;
};

exports.progress = (cbStatus) => {
  cbStatus(status);
  return this;
};

exports.done = (cbSolution) => {
  cbSolution('solution...');
  return;
};