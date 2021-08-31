const pointToPointDistance = (origin, destination) => {
  console.log('distance inputs: ', origin, destination);

  // return distance in feet
  let lon1 = toRadian(origin[1]),
    lat1 = toRadian(origin[0]),
    lon2 = toRadian(destination[1]),
    lat2 = toRadian(destination[0]);

  let deltaLat = lat2 - lat1;
  let deltaLon = lon2 - lon1;

  let a =
    Math.pow(Math.sin(deltaLat / 2), 2) +
    Math.cos(lat1) * Math.cos(lat2) * Math.pow(Math.sin(deltaLon / 2), 2);
  const EARTH_RADIUS = 6371; // in km
  let d = 2 * EARTH_RADIUS * Math.asin(Math.sqrt(a)); // in km
  return Math.round(d * 3280.84); // return feet
};

function toRadian(degree) {
  return (degree * Math.PI) / 180;
}

module.exports = {
  pointToPointDistance,
};
