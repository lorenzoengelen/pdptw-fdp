const Location = require('./Location.js');
const HashMap = require('../structs/HashMap.js');
const Matrix = require('../structs/Matrix.js');
const distance = require('../utils/distance.js');

const Problem = function() {
  this.locations = new Array();
  this.NUMBER_OF_LOCATIONS = null;
  this.NUMBER_OF_ORDERS = null;
  this.VEHICLE_CAPACITY = null;

  this.refLocations = new HashMap();

  this.distanceMatrix = null;
  this.timeMatrix = null;

  this.sortedLocations = new Array();
  this.sortedPickupLocations = new Array();
  this.sortedDeliveryLocations = new Array();
};

// private methods
Problem.prototype._calcDistTime = function() {
  this.distanceMatrix = new Matrix(this.NUMBER_OF_LOCATIONS);
  for (let i = 0; i < this.NUMBER_OF_LOCATIONS; i++) {
    const x1 = this.locations[i].getLon();
    const y1 = this.locations[i].getLat();

    for (let j = 0; j < this.NUMBER_OF_LOCATIONS; j++) {
      if (i === j) {
        this.distanceMatrix[i][j] = 0;
      } else {
        const x2 = this.locations[j].getLon();
        const y2 = this.locations[j].getLat();
        this.distanceMatrix[i][j] = this._queryDistance(x1, y1, x2, y2);
      }
    }
  }
  
  // TODO create timeMatrix
  this.timeMatrix = this.distanceMatrix;
};

Problem.prototype._createSortedArrays = function() {
  const compareLatestServiceTime = (locA, locB) => {
    return locA.getLatestServiceTime() - locB.getLatestServiceTime();
  };

  this.sortedLocations = new Array(this.locations).sort(compareLatestServiceTime);
  this.sortedPickupLocations = this.sortedPickupLocations.sort(compareLatestServiceTime);
  this.sortedDeliveryLocations = this.sortedDeliveryLocations.sort(compareLatestServiceTime);
};

Problem.prototype._queryDistance = function(x1, y1, x2, y2) {
  return distance(x1, y1, x2, y2);
};

// public methods
Problem.prototype.createProblem = function(instance) {
  const {orders, vehicle} = instance;

  this.NUMBER_OF_ORDERS = orders.length;
  this.NUMBER_OF_LOCATIONS = orders.length * 2 + 1;
  this.VEHICLE_CAPACITY = vehicle.capacity;
  
  let id = 0;

  const {vehicleId, depotLocationLon, depotLocationLat, earliestStartTime, latestEndTime} = vehicle;
  const depot = new Location(id++, `depot-${vehicleId}`, depotLocationLon, depotLocationLat, 0, earliestStartTime, latestEndTime, 0, 0, 0);
  this.locations.push(depot);
  this.refLocations.put(depot.getReference(), depot.getId());

  orders.forEach((order, i) => {
    const {orderId, pickupLocationLon, pickupLocationLat, deliveryLocationLon, deliveryLocationLat, orderLoad, earliestPickupTime, latestPickupTime, earliestDeliveryTime, latestDeliveryTime, pickupServiceTime, deliveryServiceTime} = order;
    const pickup = new Location(id++, `pickup-${orderId}`, pickupLocationLon, pickupLocationLat, orderLoad, earliestPickupTime, latestPickupTime, pickupServiceTime, 0, id);
    console.log('pickup id', id - 1);
    const delivery = new Location(id++, `delivery-${orderId}`, deliveryLocationLon, deliveryLocationLat, orderLoad * -1, earliestDeliveryTime, latestDeliveryTime, deliveryServiceTime, id - 2, 0);
    this.locations.push(pickup);
    this.locations.push(delivery);
    this.refLocations.put(pickup.getReference(), pickup.getId());
    this.refLocations.put(delivery.getReference(), delivery.getId());

    // prep for _createSortedArrays;
    this.sortedPickupLocations.push(pickup);
    this.sortedDeliveryLocations.push(delivery);
  });



  this._calcDistTime();
  this._createSortedArrays();
};

// getters
Problem.prototype.getAvgDistanceCost = function() {
};

Problem.prototype.getAvgTimeCost = function() {
};

Problem.prototype.getAvgWindowSize = function() {
};

Problem.prototype.getVehicleCapacity = function() {
  return this.VEHICLE_CAPACITY;
};

Problem.prototype.getDistance = function(i, j) {
  return this.distanceMatrix[i][j];
};

Problem.prototype.getTime = function(i, j) {
  return this.timeMatrix[i][j];
};

Problem.prototype.getLocation = function(i) {
  return this.locations[i];
};

Problem.prototype.getLocationByReference = function(ref) {
  return this.locations[this.refLocations.get(ref)];
};

Problem.prototype.getNumberOfLocations = function() {
  return this.NUMBER_OF_LOCATIONS;
};

Problem.prototype.getNumberOfOrders = function() {
  return this.NUMBER_OF_ORDERS;
};

Problem.prototype.getServiceTimeDuration = function(i) {
  return this.locations[i].getServiceTimeDuration();
};

Problem.prototype.getSortedLocations = function() {
  return this.sortedLocations;
};

Problem.prototype.getSortedLocation = function(i) {
  return this.sortedLocations[i];
}

Problem.prototype.getSortedPickupLocations = function() {
  return this.sortedPickupLocations;
};

Problem.prototype.getSortedPickupLocation = function(i) {
  return this.sortedPickupLocations[i];
};

Problem.prototype.getSortedDeliveryLocations = function() {
  return this.sortedDeliveryLocations;
};

Problem.prototype.getSortedDeliveryLocation = function(i) {
  return this.sortedDeliveryLocations[i];
};

module.exports = Problem;