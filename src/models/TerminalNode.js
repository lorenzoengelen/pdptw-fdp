const LabelList = require('./LabelList.js');

const TerminalNode = function(termNode) {
  this.terminalNode = termNode;
  this.labelList = new LabelList();
};

TerminalNode.prototype.addLabel = function(label) {
  this.labelList.addLabel(label);
};

TerminalNode.prototype.getLabelList = function() {
  return this.labelList.getLabelList();
};

module.exports = TerminalNode;