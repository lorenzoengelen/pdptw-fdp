const HashMap = function() {
  this._dict = {};
};

// private
HashMap.prototype._shared = {id: 1};

// public
HashMap.prototype.put = function(key, value) {
  if (typeof key === 'object') {
    if (!key.hasOwnProperty._id) {
      key.hasOwnProperty = function(key) {
        return Object.prototype.hasOwnProperty.call(this, key);
      }
      key.hasOwnProperty._id = this._shared.id++;
    }
    this._dict[key.hasOwnProperty._id] = value;
  } else {
    this._dict[key] = value;
  }
  return this;
};

HashMap.prototype.get = function(key) {
  if (typeof key === 'object') {
    return this._dict[key.hasOwnProperty._id];
  }
  return this._dict[key];
};

HashMap.prototype.values = function() {
  let values = new Array();
  for (let key in this._dict) {
    values.push(this._dict[key]);
  }
  return values;
};

HashMap.prototype.remove = function(key) {
  if (this._dict.hasOwnProperty(key)) {
    const value = this._dict[key];
    delete this._dict[key];
    return value;
  } else {
    return -1;
  }
};

module.exports = HashMap;