const Label = function(termNode, time, distance, previousLabel) {
  this.time = time;
  this.distance = distance;
  this.eliminated = false;
  this.termNode = termNode;
  this.previousLabel = previousLabel;
};

Label.prototype.addDistance = function(dist) {
  this.setDistance(this.getDistance() + dist);
  return this;
};

Label.prototype.addTime = function(time) {
  this.setTime(this.getTime() + time);
  return this;
};

Label.prototype.getTime = function() {
  return this.time;
};

Label.prototype.getDistance = function() {
  return this.distance;
};

Label.prototype.getTermNode = function() {
  return this.termNode;
};

Label.prototype.getPreviousLabel = function() {
  return this.previousLabel;
};

Label.prototype.getEliminated = function() {
  return this.eliminated;
};

Label.prototype.setTime = function(newTime) {
  this.time = newTime;
  return this;
};

Label.prototype.setDistance = function(newDist) {
  this.distance = newDist;
  return this;
};

Label.prototype.setTermNode = function(newTermNode) {
  this.termNode = newTermNode;
  return this;
};

module.exports = Label;