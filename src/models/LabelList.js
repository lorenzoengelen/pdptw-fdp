const ArrayList = require('../structs/ArrayList.js');

const LabelList = function() {
  this.labelList = new ArrayList();
};

LabelList.prototype.addLabel = function(label) {
  this.labelList.add(label);
};

LabelList.prototype.addLabels = function(labels) {
  for (let i = 0; i < labels.size(); i++) {
    this.labelList.add(labels.get(i));
  }
};

LabelList.prototype.getLabelList = function() {
  return this.labelList;
};

module.exports = LabelList;