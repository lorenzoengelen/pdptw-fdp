const State = require('./State.js');
const HashMap = require('../structs/HashMap.js');

const Stage = function(problem) {
  this.problem = problem;
  this.numOrders = problem.getNumberOfOrders();
  
  // called Sets in paper
  this.states = new HashMap();
};

Stage.prototype.createInitialStage = function() {
  let state;
  for (let i = 1; i <= this.numOrders; i++) {
    state = new State(this.problem, i);
  }
};

Stage.prototype.addNewState = function(oldState, newTermNode) {
};

Stage.prototype.criteria4 = function(state, loc, k) {

};

module.exports = Stage;