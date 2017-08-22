const Problem = require('./Problem.js');
const Stage = require('./Stage.js');

const ArrayList = require('../structs/ArrayList.js');

const Solver = function() {
  this.problem = new Problem();
  this.stages = new ArrayList();
};

Solver.prototype.solve = function(instance, timeout) {
  const start = Date.now();
  const end = Date.now() + timeout * 60 * 1000;

  this.problem.createProblem(instance);
  
  const stage = new Stage(this.problem);
  stage.createInitialStage();

};

module.exports = Solver;