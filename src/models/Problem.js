const Location = require('./Location.js');

const HashMap = require('../structs/HashMap.js');

const Problem = function() {
  this.locations = [];
  this.NUMBER_OF_LOCATIONS = null;
  this.NUMBER_OF_ORDERS = null;
  this.VEHICLE_CAPACITY = null;

  this.refLocations = new HashMap();

  this.distance = null;
  this.time = null;

  this.sortedLocations = [];
  this.sortedPickup = [];
  this.sortedDelivery = [];
};

// private methods
Problem.prototype._calcDistTime = function() {
  // console.log(this.locations);
};

Problem.prototype._createSortedArrays = function() {
  console.log(this.locations);
};

Problem.prototype._findDistance = function() {
};

// public methods
Problem.prototype.createProblem = function(instance) {
  const {orders, vehicle} = instance;

  this.NUMBER_OF_ORDERS = orders.length;
  this.NUMBER_OF_LOCATIONS = orders.length * 2;
  this.VEHICLE_CAPACITY = vehicle.capacity;
  
  let id = 0;

  const {vehicleId, depotLocationLon, depotLocationLat, earliestStartTime, latestEndTime} = vehicle;
  const depot = new Location(id++, `vehicle-${vehicleId}`, depotLocationLon, depotLocationLat, 0, earliestStartTime, latestEndTime, 0, 0, 0);
  this.locations.push(depot);

  orders.forEach((order, i) => {
    const {orderId, pickupLocationLon, pickupLocationLat, deliveryLocationLon, deliveryLocationLat, orderLoad, earliestPickupTime, latestPickupTime, earliestDeliveryTime, latestDeliveryTime, pickupServiceTime, deliveryServiceTime} = order;
    const pickup = new Location(id++, `order-${orderId}`, pickupLocationLon, pickupLocationLat, orderLoad, earliestPickupTime, latestPickupTime, pickupServiceTime, 0, id);
    const delivery = new Location(id++, `order-${orderId}`, deliveryLocationLon, deliveryLocationLat, orderLoad * -1, earliestDeliveryTime, latestDeliveryTime, deliveryServiceTime, id - 2, 0);
    this.locations.push(pickup);
    this.locations.push(delivery);
  });

  this._calcDistTime();
  this._createSortedArrays();
};

// getters

module.exports = Problem;