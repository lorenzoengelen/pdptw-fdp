const app = require('./src/index.js');


// id, x, y, q, e, l, s, oId, dId
// 0 40  50  0 0 1236  0 0 0
// 25  200 1

// 3 42  66  10  65  146 90  0 75
// 5 42  65  10  15  67  90  0 7
// 6 40  69  20  621 702 90  0 2
// 8 38  68  20  255 324 90  0 10
// 9 38  70  10  534 605 90  0 4

// 75  45  65  -10 997 1068  90  3 0
// 7   40  66  -10 170 225   90  5 0
// 2   45  70  -20 825 870   90  6 0
// 10  35  66  -20 357 410   90  8 0
// 4   42  68  -10 727 782   90  9 0

var problem = {
  orders: [{
    orderId: 1,
    pickupLocationLon: 42, // x
    pickupLocationLat: 66, // y
    deliveryLocationLon: 45,
    deliveryLocationLat: 65,
    orderLoad: 10,
    earliestPickupTime: 65,
    latestPickupTime: 146,
    earliestDeliveryTime: 997,
    latestDeliveryTime: 1068,
    pickupServiceTime: 90,
    deliveryServiceTime: 90,
  },{
    orderId: 2,
    pickupLocationLon: 42,
    pickupLocationLat: 65,
    deliveryLocationLon: 40,
    deliveryLocationLat: 66,
    orderLoad: 10,
    earliestPickupTime: 15,
    latestPickupTime: 67,
    earliestDeliveryTime: 170,
    latestDeliveryTime: 225,
    pickupServiceTime: 90,
    deliveryServiceTime: 90,
  },{
    orderId: 3,
    pickupLocationLon: 40,
    pickupLocationLat: 69,
    deliveryLocationLon: 45,
    deliveryLocationLat: 70,
    orderLoad: 20,
    earliestPickupTime: 621,
    latestPickupTime: 702,
    earliestDeliveryTime: 825,
    latestDeliveryTime: 870,
    pickupServiceTime: 90,
    deliveryServiceTime: 90,
  },{
    orderId: 4,
    pickupLocationLon: 38,
    pickupLocationLat: 68,
    deliveryLocationLon: 35,
    deliveryLocationLat: 66,
    orderLoad: 20,
    earliestPickupTime: 255,
    latestPickupTime: 324,
    earliestDeliveryTime: 357,
    latestDeliveryTime: 410,
    pickupServiceTime: 90,
    deliveryServiceTime: 90,
  },{
    orderId: 5,
    pickupLocationLon: 38,
    pickupLocationLat: 70,
    deliveryLocationLon: 42,
    deliveryLocationLat: 68,
    orderLoad: 10,
    earliestPickupTime: 534,
    latestPickupTime: 605,
    earliestDeliveryTime: 727,
    latestDeliveryTime: 782,
    pickupServiceTime: 90,
    deliveryServiceTime: 90,
  }],
  vehicle: {
    vehicleId: 1,
    capacity: 200,
    speed: 1,
    depotLocationLon: 40, // x
    depotLocationLat: 50, // y
    earliestStartTime: 0,
    latestEndTime: 1236,
    operatingCostPerHour: 1,
    operatingCostPerKilometer: 1
  }
};

app.solve(problem)
  .progress(status => {
    // console.log(status);
  })
  .done(solution => {
    // console.log(solution);
  });


