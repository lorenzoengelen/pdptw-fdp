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

TerminalNode.prototype.getLabelList = function() {
  return this.labelList.getLabelList();
};

module.exports = TerminalNode;