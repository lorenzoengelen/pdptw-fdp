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

// public mehthods
BitSet.prototype.and = function(set) {
};

BitSet.prototype.andNot = function(set) {
};

BitSet.prototype.or = function(set) {
};

BitSet.prototype.xor = function(set) {
};

BitSet.prototype.set = function(pos) {
};

BitSet.prototype.get = function(n) {
  let pos = this._convert.call(this, n);
  return pos ? (this[dataSymbol][pos.byte] & 1 << pos.bit) > 0 : null;
};

BitSet.prototype.toggle = function(n) {
  let pos = this._convert.call(this, n);
  if (pos) this[dataSymbol][pos.byte] ^= 1 << pos.bit;
  return pos != null;
}

BitSet.prototype.flip = function(from, to) {
  return this.toggle(from);
};

// Reverses the bits from startIndex to endIndex
// BitSet.prototype.flip = function(from, to) {
// };

BitSet.prototype.equals = function(set) {
};

// Duplicates the invoking BitSet object
BitSet.prototype.clone = function() {
};

module.exports = BitSet;