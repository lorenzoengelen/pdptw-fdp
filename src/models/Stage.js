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

Stage.prototype.addNewState = function(oldState, newTermNode) {
  const newState = new State(this.problem, null, oldState.getVisited(), oldState.getCanVisit(), oldState.getLoad());
  // CRITERIA #1 - NODE J IS NOT PREVIOUSLY VISITED
  // CRITERIA #2 - IS J IS DESTINATION, J-N MUST HAVE BEEN VISITED
  
  console.log(newState.getVisited().toString(), '==', newState.getCanVisit().toString());
  newState.visitNode(newTermNode);
  console.log(newState.getVisited().toString(), '==', newState.getCanVisit().toString());

  // CRITERIA #3 - CAPACITY CONSTRAINT
  if (newState.getLoad() <= this.problem.getVehicleCapacity()) {
    // if () {

    // } else {

    // }
  }
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