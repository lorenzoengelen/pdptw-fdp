const ArrayList = function() {
  return new Array();
};

Array.prototype.add = function(el) {
  if (this.indexOf(el) === -1) {
    this.push(el);
  }
};

Array.prototype.get = function(i) {
  return this[i];
};

Array.prototype.remove = function(el) {
  const i = this.indexOf(el);
  if (i !== -1) {
    this.splice(i, 1);
  }
};

Array.prototype.contains = function(el) {
  return this.indexOf(el) !== -1;
};

Array.prototype.toggle = function(el) {
  if (this.indexOf(el) === -1) {
    this.add(el);
  } else {
    this.remove(el);
  }
};

Array.prototype.size = function() {
  return this.length;
};

module.exports = ArrayList;