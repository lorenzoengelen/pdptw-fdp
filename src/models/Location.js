var Location = function(id, ref, x, y, q, e, l, s, pId, dId) {
  
  this.id = id;
  this.reference = ref;
  this.lon = x;
  this.lat = y;
  this.demand = q;
  this.earliestServiceTime = e;
  this.latestServiceTime = l;
  this.serviceTimeDuration = s;
  this.pickupSibling = pId;
  this.deliverySibling = dId;

};

Location.prototype.compareTo = function(obj) {
};

Location.prototype.equals = function(obj) {

};

Location.prototype.isPickup = function() {

};

Location.prototype.isDelivery = function() {

};

Location.prototype.parseLiLimLine = function(liLimLine) {

};

// GETTERS
Location.prototype.getId = function() {

};

Location.prototype.getRef = function() {

};

Location.prototype.getCordX = function() {

};

// SETTERS

module.exports = Location;