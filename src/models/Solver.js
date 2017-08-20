const Problem = require('./Problem.js');
const Stage = require('./Stage.js');

const ArrayList = require('../structs/ArrayList.js');

const Solver = function() {
  this.problem = new Problem();

  this.stages = new Array();
  this.stage = new Stage();
  this.finalStage = new Stage();
};

Solver.prototype.solve = function(instance, timeout) {

  this.problem.createProblem(instance);
  
  // this.stage.createInitalStage();
  // stages.add(stage);

  const start = Date.now();
  const end = Date.now();
};

module.exports = Solver;