const EUCLIDEAN = 'EUCLIDEAN_DISTANCE';
const HAVERSINE = 'HAVERSINE_DISTANCE';
const GOOGLE = 'GOOGLE_DISTANCE';

const DISTANCE_COMPUTATION_METHOD = EUCLIDEAN;

const euclideanDistance = function(x1, y1, x2, y2) {
  let dX = Math.abs(x1 - x2);
  let dY = Math.abs(y1 - y2);
  dX *= dX;
  dY *= dY;
  return Math.sqrt(dX + dY);
};

const haversineDistance = function(lon1, lat1, lon2, lat2) {
  // TODO
};

exports.googleDistance = function(lon1, lat1, lon2, lat2) {
  // TODO
};

const distance = function(x1, y1, x2, y2) {
  switch (DISTANCE_COMPUTATION_METHOD) {
    case EUCLIDEAN:
      return euclideanDistance(x1, y1, x2, y2);
      break;
    case HAVERSINE:
      return haversineDistance(x1, y1, x2, y2);
      break;
    case GOOGLE:
      return googleDistance(x1, y1, x2, y2);
      break;
    default:
      return euclideanDistance(x1, y1, x2, y2);
      break;
  }
};

module.exports = distance;