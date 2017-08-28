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

TerminalNode.prototype.checkPostFeasibility = function() {
  console.log(this.labelList.getLabelList().size())
};

TerminalNode.prototype.criteria6 = function() {
};

TerminalNode.prototype.criteria7 = function() {
};

TerminalNode.prototype.criteria8 = function() {
};

TerminalNode.prototype.getLabelList = function() {
  return this.labelList.getLabelList();
};

module.exports = TerminalNode;