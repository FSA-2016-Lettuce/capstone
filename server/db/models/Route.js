const Sequelize = require('sequelize');
const db = require('../db');

const Route = db.define('route', {});

Route.prototype.getDistance = async function () {
  const waypoints = await this.getWaypoints();
  const origin = [waypoints[0].latitude, waypoints[0].longitude];
  const destination = [waypoints[1].latitude, waypoints[1].longitude];
  const distanceOne = getDistanceOne(origin, destination);
  const distanceTwo = getDistanceTwo(
    origin[0],
    origin[1],
    destination[0],
    destination[1]
  );
  console.log('distance ONE: ', distanceOne);
  console.log('distance TWO: ', distanceTwo);
};

module.exports = Route;

function getDistanceOne(origin, destination) {
  // return distance in meters
  let lon1 = toRadian(origin[1]),
    lat1 = toRadian(origin[0]),
    lon2 = toRadian(destination[1]),
    lat2 = toRadian(destination[0]);

  let deltaLat = lat2 - lat1;
  let deltaLon = lon2 - lon1;

  let a =
    Math.pow(Math.sin(deltaLat / 2), 2) +
    Math.cos(lat1) * Math.cos(lat2) * Math.pow(Math.sin(deltaLon / 2), 2);
  let c = 2 * Math.asin(Math.sqrt(a));
  const EARTH_RADIUS = 6371;
  return c * EARTH_RADIUS * 1000;
}

function toRadian(degree) {
  return (degree * Math.PI) / 180;
}

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
