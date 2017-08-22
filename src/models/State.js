const BitSet = require('../structs/BitSet.js');
const HashMap = require('../structs/HashMap.js');

const State = function(problem, jPickup, visited, canVisit, load) {
  this.problem = problem;
  this.numOrders = problem.getNumberOfOrders();

  this.visited = null;
  this.canVisit = null;
  this.load = 0;
  this.terminalNodes = new HashMap();

  if (arguments.length === 2) {
    // for initial stage (Pickup Nodes)
    this.visited = new BitSet(2 * this.numOrders);
    this.canVisit = new BitSet(2 * this.numOrders);

    console.log(this.visited.get(10));
    this.visited.toggle(10);
    console.log(this.visited.get(10));

  } else if (arguments.length === 4) {

  }
};

module.exports = State;