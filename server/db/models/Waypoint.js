const Sequelize = require('sequelize');
const db = require('../db');

const Waypoint = db.define('waypoint', {
  pathIndex: {
    type: Sequelize.INTEGER,
    allowNull: false,
  },
  latitude: {
    type: Sequelize.FLOAT,
    allowNull: false,
  },
  longitude: {
    type: Sequelize.FLOAT,
    allowNull: false,
  },
});

module.exports = Waypoint;
