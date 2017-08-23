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

  // final stage
  const finalStage = new Stage(this.problem);

  // stages
  for (let i = 2, len = this.problem.getNumberOfLocations(); i <= len; i++) {
    const prevStage = this.stages.get(i - 2);
    const newStage = new Stage(this.problem);
    if (i === len) {
      // final stage

    } else {
      // stages
      // ===> HERE <=== 
      prevStage.getStates().values().forEach(state => {
        if (Date.now() > end) {
          return 'exceeded time limit';
        }
        // console.log(state.getCanVisit().toString());
        // console.log(state.getCanVisit().nextSetBit());
      });
    }
    this.stages.add(newStage);
  }

  var state = new State(this.problem, 0);
  console.log('==============')
  console.log(state.getCanVisit().nextSetBit());


  return '';
};

module.exports = Solver;