const BitSet = require('../structs/BitSet.js');
const HashMap = require('../structs/HashMap.js');
const TerminalNode = require('./TerminalNode.js');
const Label = require('./Label.js');
const LabelList = require('./LabelList.js');

const State = function(problem, jPickup, visited, canVisit, load) {
  this.problem = problem;
  this.numOrders = problem.getNumberOfOrders();

  this.visited = null;
  this.canVisit = null;
  this.load = 0;
  this.terminalNodes = new HashMap();

  if (arguments.length === 2) {
    // FOR initial stage (Pickup Nodes)
    this.visited = (new BitSet(2 * this.numOrders))
      .flip(0)
      .flip(jPickup);
    
    this.canVisit = (new BitSet(2 * this.numOrders))
      .flip(1, this.numOrders)
      .flip(jPickup)
      .flip(jPickup + this.numOrders);

    this.terminalNodes.put(jPickup, new TerminalNode(this.problem, jPickup));
    this.terminalNodes.get(jPickup)
      .addLabel(new Label(jPickup,
          Math.max(this.problem.getTime(0, jPickup), this.problem.getLocation(jPickup).getEarliestServiceTime()),
          this.problem.getDistance(0, jPickup),
          null));

  } else if (arguments.length === 5) {
    // NOT initial stage
    this.visited = visited.clone();
    this.canVisit = canVisit.clone();
    this.load = load;
  }
};

State.prototype.isVisited = function(i) {
  return this.visited.get(i);
};

State.prototype.visitNode = function(j) {
  // CRITERIA #1 - NODE J IS NOT PREVIOUSLY VISITED
  // CRITERIA #2 - IS J IS DESTINATION, J-N MUST HAVE BEEN VISITED
  if (j === 0) {
    this.visited.flip(0);
  } else {
    if (j <= this.numOrders) {
      // j is pickup location
      this.canVisit.flip(j + this.numOrders);
    }
    this.canVisit.flip(j);
    this.visited.flip(j);
  }
  this.load += this.problem.getLocation(j).getDemand();
};

State.prototype.addTerminalNode = function(newTermNode, oldLabels) {
  if (!this.terminalNodes.get(newTermNode)) {
    this.terminalNodes.put(newTermNode, new TerminalNode(this.problem, newTermNode));
  }
  this.terminalNodes.get(newTermNode).addNewLabels(oldLabels);
  if (this.terminalNodes.get(newTermNode).getLabelList().isEmpty()) {
    this.terminalNodes.remove(newTermNode);
  }
};

State.prototype.getVisited = function() {
  return this.visited;
};

State.prototype.getCanVisit = function() {
  return this.canVisit;
};

State.prototype.getLoad = function() {
  return this.load;
};

State.prototype.getLabelList = function() {
  const labelList = new LabelList(this.problem);
  this.terminalNodes.values().forEach(termNode => {
    labelList.addLabels(termNode.getLabelList());
  });
  return labelList.getLabelList();
};

module.exports = State;