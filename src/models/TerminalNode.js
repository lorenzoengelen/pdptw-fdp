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
      this.labelList.getLabelList().remove(i);
    } else if (!this.criteria8(state, label)) {
      // TODO
    } else if (!this.criteria7(state, label)) {
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
    if (!state.isVisited(newLoc) && label.getTermNode() !== newLoc) {
      if (label.getTime() + this.problem.getServiceTimeDuration(label.getTermNode()) + this.problem.getTime(label.getTermNode(), newLoc) > this.problem.getLocation(newLoc).getLatestServiceTime()) {
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

// CRITERIA #8 -  IF NODE J IS VISITED AT TIME Tj, IT MUST BE POSSIBLE TO VISIT
//                ALL PAIRS OF UNIVISTED ORIGINS L1, AND L2 WHILE RESPECTING THE
//                TIME CONSTRAINTS
TerminalNode.prototype.criteria8 = function(state, label) {
  let pick1 = -1, pick2 = -1, pick;
  let found1 = false, found2 = false;
  let index = 0;
  
  while ((!found1 && !found2) && index < this.problem.getNumberOfOrders()) {
    if (!found1) {
      pick = this.problem.getSortedPickupLocation(index).getId();
      if (!state.isVisited(pick)) {
        pick1 = pick;
        found1 = true;
        index++;
      }
    }
    if (found1 && index < this.problem.getNumberOfOrders()) {
      pick = this.problem.getSortedPickupLocation(index).getId();
      if (!state.isVisited(pick)) {
        pick2 = pick;
        found2 = true;
      }
    }
    index++;
  }

  if (found1 && found2) {
    let time1 = Math.max(this.problem.getLocation(pick1).getEarliestServiceTime(), label.getTime() + this.problem.getServiceTimeDuration(label.getTermNode()) + this.problem.getTime(label.getTermNode(), pick1));
    console.log(this.problem.getLocation(pick1).getEarliestServiceTime());
    console.log(label.getTime() + this.problem.getServiceTimeDuration(label.getTermNode()) + this.problem.getTime(label.getTermNode(), pick1))
    let time2 = Math.max();
  } else {
    return true;
  }
};

TerminalNode.prototype.getLabelList = function() {
  return this.labelList.getLabelList();
};

module.exports = TerminalNode;