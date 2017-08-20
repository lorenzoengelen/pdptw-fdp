exports.euclideanDistance = function(x1, y1, x2, y2) {
  let dX = Math.abs(x1 - x2);
  let dY = Math.abs(y1 - y2);
  dX *= dX;
  dY *= dY;
  return Math.sqrt(dX + dY);
};

exports.haversineDistance = function(x1, y1, x2, y2) {
};

exports.googleDistance = function(x1, y1, x2, y2) {
  // make call to Google Maps api
};

