const ArrayList = require('../structs/ArrayList.js');
const Label = require('./Label.js');

const LabelList = function(problem) {
  this.problem = problem;
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

LabelList.prototype.addNewLabels = function(labels, newNode) {
  for (let i = 0; i < labels.size(); i++) {
    const oldNode = labels.get(i).termNode;
    const label = new Label(labels.get(i).getTermNode(), 
      labels.get(i).getTime(), 
      labels.get(i).getDistance(), 
      labels.get(i));
    
    label.addDistance(this.problem.getDistance(oldNode, newNode))
      .addTime(Math.max(this.problem.getTime(oldNode, newNode) +
        this.problem.getServiceTimeDuration(oldNode) + 
        label.getTime(), this.problem.getLocation(i).getEarliestServiceTime()))
      .setTermNode(newNode);

    // CRITERIA 5 - TIME CONSTRAINT MUST BE RESPECTED
    if (label.getTime() <= this.problem.getLocation(newNode).getLatestServiceTime()) {
      this.labelList.add(label);
    }
  }
};

LabelList.prototype.getLabelList = function() {
  return this.labelList;
};

module.exports = LabelList;