const Sequelize = require('sequelize');
const db = require('../db');

const Route = db.define('route', {
  name: {
    type: Sequelize.STRING,
    defaultValue: 'Run',
    allowNull: false,
  },
  distance: {
    type: Sequelize.INTEGER,
    defaultValue: 0,
  },
});

Route.beforeUpdate(async (route) => {
  route.distance = await route.getDistance();
});

Route.prototype.getDistance = async function () {
  const waypoints = await this.getWaypoints({ order: [['pathIndex', 'ASC']] });

  let routeDistance = 0;
  for (let i = 0; i < waypoints.length - 1; i++) {
    let origin = [waypoints[i].latitude, waypoints[i].longitude];
    let destination = [waypoints[i + 1].latitude, waypoints[i + 1].longitude];
    let currentDistance = getDistanceHelper(origin, destination);
    routeDistance += currentDistance;
  }
  return routeDistance;
};

module.exports = Route;

function getDistanceHelper(origin, destination) {
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
}

function toRadian(degree) {
  return (degree * Math.PI) / 180;
}

/* Alternative distance function
function getDistanceTwo(lat1, lon1, lat2, lon2, unit) {
  if (lat1 == lat2 && lon1 == lon2) {
    return 0;
  } else {
    var radlat1 = (Math.PI * lat1) / 180;
    var radlat2 = (Math.PI * lat2) / 180;
    var theta = lon1 - lon2;
    var radtheta = (Math.PI * theta) / 180;
    var dist =
      Math.sin(radlat1) * Math.sin(radlat2) +
      Math.cos(radlat1) * Math.cos(radlat2) * Math.cos(radtheta);
    if (dist > 1) {
      dist = 1;
    }
    dist = Math.acos(dist);
    dist = (dist * 180) / Math.PI;
    dist = dist * 60 * 1.1515;
    if (unit == 'K') {
      dist = dist * 1.609344;
    }
    if (unit == 'N') {
      dist = dist * 0.8684;
    }
    return dist;
  }
}
*/
