const Problem = require('./Problem.js');
const Stage = require('./Stage.js');
const State = require('./State.js');

const ArrayList = require('../structs/ArrayList.js');

const Solver = function() {
  this.problem = new Problem();
  this.stages = new ArrayList();
};

Solver.prototype.solve = function(instance, timeout) {
  const start = Date.now();
  const end = Date.now() + timeout * 60 * 1000;

  this.problem.createProblem(instance);
  
  // initial stage
  const stage = new Stage(this.problem);
  stage.createInitialStage();
  this.stages.add(stage);

  // stages
  for (let i = 2, len = this.problem.getNumberOfLocations(); i <= len; i++) {
    
    const prevStage = this.stages.get(i - 2);
    const newStage = new Stage(this.problem);
    const finalStage = new Stage(this.problem);

    if (i === len) {
      // final stage

    } else {
      // stages
      // ===> HERE <=== 
      prevStage.getStates().values().forEach(state => {
        if (Date.now() > end) {
          return 'exceeded time limit';
        }
        // ===> HERE <=== 
        state.getCanVisit().print(); // console log
        // LOOP over every location that can be visited from a specific state
        for (let loc = state.getCanVisit().nextSetBit(0); loc >= 0; loc = state.getCanVisit().nextSetBit(loc + 1)) {
          if (Date.now() > end) {
            return 'exceeded time limit';
          }
          // CRITERIA #4 - POSSIBLE TO VISIT UNVISITED NODES WHILE RESPECTING TIME CONSTRAINT
          if (newStage.criteria4(state, loc, i)) {
            // POSSIBLE to visit specific location; k-2, to k+4 nodes sorted on earliest due date can be visited without time window violation
            // ===> HERE <===
            // newStage.addNewState(state, loc);
          }

        }
      });
    }
    this.stages.add(newStage);
  }

  return '';
};

module.exports = Solver;