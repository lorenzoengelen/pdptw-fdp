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

Location.prototype.isDepot = function() {
  return (this.pickupSibling === 0 && this.deliverySibling === 0);
};

Location.prototype.isPickup = function() {
  return (this.pickupSibling === 0 && this.deliverySibling !== 0);
};

Location.prototype.isDelivery = function() {
  return (this.pickupSibling !== 0 && this.deliverySibling === 0);
};

// GETTERS
Location.prototype.getId = function() {
  return this.id;
};

Location.prototype.getReference = function() {
  return this.reference;
};

Location.prototype.getLon = function() {
  return this.lon;
};

Location.prototype.getLat = function() {
  return this.lat;
};

Location.prototype.getDemand = function() {
  return this.demand;
};

Location.prototype.getEarliestServiceTime = function() {
  return this.earliestServiceTime;
};

Location.prototype.getLatestServiceTime = function() {
  return this.latestServiceTime;
};

Location.prototype.getServiceTimeDuration = function() {
  return this.serviceTimeDuration;
};

module.exports = Location;