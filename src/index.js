const Solver = require('./models/Solver.js');

const SOLVER_TIMEOUT = 30;

var status = {
  execStatus: null,
  solverStartTime: null,
  solverEndTime: null,
  totalDistance: null
};

exports.solve = (instance) => {
  status.solverStartTime = Date.now();

  const solver = new Solver();
  solver.solve(instance, SOLVER_TIMEOUT);

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