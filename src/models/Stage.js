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
    this.states.put(state.getVisited().toString(), state);
  }
};

// CRITERIA #3 - CAPACITY CONSTRAINT
Stage.prototype.addNewState = function(oldState, newTermNode) {
};

// CRITERIA #4 - POSSIBLE TO VISIT UNVISITED NODES WHILE RESPECTING TIME CONSTRAINT
Stage.prototype.criteria4 = function(state, loc, k) {
  const earliestTime = this.problem.getLocation(loc).getEarliestServiceTime();
  // the test is carried out for the most probable nodes visited at iteration k+1;
  // i.e. unvisited nodes from k-2, to k+2
  const minIter = Math.max(k - 2, 0);
  const maxIter = Math.min(k + 4, this.problem.getNumberOfLocations() - 1);

  for (let iter = minIter; iter <= maxIter; iter++) {
    const newLoc = this.problem.getSortedLocation(iter).getId();
    if (!state.isVisited(newLoc) && loc !== newLoc) {
      if (this.problem.getLocation(newLoc).getLatestServiceTime() < earliestTime + this.problem.getServiceTimeDuration(loc) + this.problem.getTime(loc, newLoc)) {
        return false;
      }
    }
  }
  return true;
};

Stage.prototype.getStates = function() {
  return this.states;
};

module.exports = Stage;