const Sequelize = require('sequelize');
const db = require('../db');
const { pointToPointDistance } = require('../../utils');

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
    let currentDistance = pointToPointDistance(origin, destination);
    routeDistance += currentDistance;
  }
  return routeDistance;
};

module.exports = Route;
