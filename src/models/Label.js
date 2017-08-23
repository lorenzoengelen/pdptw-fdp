const Label = function(termNode, time, distance, previousLabel) {
  this.time = time;
  this.distance = distance;
  this.eliminated = false;
  this.termNode = termNode;
  this.previousLabel = previousLabel;
};

module.exports = Label;