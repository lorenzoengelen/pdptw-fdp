const BitSet = require('../structs/BitSet.js');
const HashMap = require('../structs/HashMap.js');
const TerminalNode = require('./TerminalNode.js');
const Label = require('./Label.js');

const State = function(problem, jPickup, visited, canVisit, load) {
  this.problem = problem;
  this.numOrders = problem.getNumberOfOrders();

  this.visited = null;
  this.canVisit = null;
  this.load = 0;
  this.terminalNodes = new HashMap();

  if (arguments.length === 2) {
    // for initial stage (Pickup Nodes)
    this.visited = (new BitSet(2 * this.numOrders))
      .flip(0)
      .flip(jPickup);
    
    this.canVisit = (new BitSet(2 * this.numOrders))
      .flip(1, this.numOrders)
      .flip(jPickup)
      .flip(jPickup + this.numOrders);

    this.terminalNodes.put(jPickup, new TerminalNode(jPickup));
    this.terminalNodes.get(jPickup)
      .addLabel(new Label(jPickup,
          Math.max(this.problem.getTime(0, jPickup), this.problem.getLocation(jPickup).getEarliestServiceTime()),
          this.problem.getDistance(0, jPickup),
          null));

  } else if (arguments.length === 4) {
    // not initial stage
  }
};

State.prototype.getVisited = function() {
  return this.visited;
};

module.exports = State;