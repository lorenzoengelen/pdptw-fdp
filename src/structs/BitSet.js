const dataSymbol = Symbol('data');
const BITS = 32;

const BitSet = function(size, value) {
  this.size = size;
  let ints = Math.ceil(this.size / BITS);
  this[dataSymbol] = Array.apply(null, Array(ints)).map(x => !value ? 0 : -1);
};

// private methods
BitSet.prototype._convert = function(n) {
  if (n > this.size) return null;
  let byte = n / BITS | 0;
  let bit = n % BITS;
  return {byte, bit};
};

BitSet.prototype._toggle = function(n) {
  let pos = this._convert.call(this, n);
  if (pos) this[dataSymbol][pos.byte] ^= 1 << pos.bit;
  return pos != null;
}

// public methods
BitSet.prototype.and = function(set) {
};

BitSet.prototype.andNot = function(set) {
};

BitSet.prototype.or = function(set) {
};

BitSet.prototype.xor = function(set) {
};

BitSet.prototype.set = function(n) {
};

BitSet.prototype.get = function(n) {
  let pos = this._convert.call(this, n);
  return pos ? (this[dataSymbol][pos.byte] & 1 << pos.bit) > 0 : null;
};

// Reverses the bits from startIndex to endIndex
BitSet.prototype.flip = function(from, to) {
  if (from === undefined) {
    return this;
  } else if (to === undefined) {
    return this._toggle.call(this, from);
  } else if (from <= to && from >= 0) {
    for (let i = from; i <= to; i++) {
      this._toggle.call(this, i);
    }
  }
  return this;
};

BitSet.prototype.equals = function(set) {
  const minSize = this.size < set.size ? this.size : set.size;
  for (let i = 0; i <= minSize; i++) {
    if (this.get.call(this, i) !== set.get(i)) {
      return false;
    }
  }
  return true;
};

// Duplicates the invoking BitSet object
BitSet.prototype.clone = function() {
  return new BitSet(this.size);
};

BitSet.prototype.print = function() {
  let str = '';
  for (let i = 0, len = this.size; i <= len; i++) {
    if (this.get(i)) {
      str += '1';
    } else {
      str += '0';
    }
  }
  console.log(str);
};

module.exports = BitSet;