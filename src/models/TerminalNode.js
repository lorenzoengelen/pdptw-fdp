const LabelList = require('./LabelList.js');

const TerminalNode = function(problem, termNode) {
  this.problem = problem;
  this.terminalNode = termNode;
  this.labelList = new LabelList(this.problem);
};

TerminalNode.prototype.addLabel = function(label) {
  this.labelList.addLabel(label);
};

TerminalNode.prototype.addNewLabels = function(oldLabels) {
  this.labelList.addNewLabels(oldLabels, this.terminalNode);
};

TerminalNode.prototype.eliminateLabels = function() {
  this.labelList.eliminateLabels();
};

TerminalNode.prototype.checkPostFeasibility = function(state, iter) {
  for (let i = 0; i < this.labelList.getLabelList().size(); i++) {
    const label = this.labelList.getLabelList().get(i);
    if (!this.criteria6(state, iter, label)) {
      // TODO
    } else if (!this.criteria7(state, label)) {
      // TODO
    } else if (!this.criteria8(state, label)) {
      // TODO
    }
  }
};

// CRITERIA #6 - IT MUST BE POSSIBLE TO VISIT EACH UNVISITED NODE
TerminalNode.prototype.criteria6 = function(state, k, label) {
  const minIter = Math.max(k - 2, 0);
  const maxIter = Math.min(k + 4, this.problem.getNumberOfLocations());
  
  for (let iter = minIter; iter <= maxIter; iter++) {
    const newLoc = this.problem.getSortedLocation(iter).getId();
    if (!state.isVisited(newLoc) && label.termNode !== newLoc) {
      if (label.time + this.problem.getServiceTimeDuration(label.termNode) + this.problem.getTime(label.termNode, newLoc) > this.problem.getLocation(newLoc).getLatestServiceTime()) {
        return false;
      }
    }
  }
  return true;
};

// CRITERIA #7 -  IT MUST BE POSSIBLE TO VISIT ALL PAIRS OF DESTINATIONS N+L1,
//                AND N+L2 WHOSE ORIGINS L1, AND L2 HAVE BEEN PREVIOUSLY VISITED 
//                WHILE RESPECTING THE TIME CONSTRIANTS
TerminalNode.prototype.criteria7 = function(state, label) {
};

TerminalNode.prototype.criteria8 = function(state, label) {
};

TerminalNode.prototype.getLabelList = function() {
  return this.labelList.getLabelList();
};

module.exports = TerminalNode;