function ArrayList() {
  return new Array();
};

Array.prototype.add = function(el) {
  if (this.indexOf(el) === -1) {
    this.push(el);
  }
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

module.exports = ArrayList;