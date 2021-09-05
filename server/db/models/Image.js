const Sequelize = require('sequelize');
const db = require('../db');

const Image = db.define('image', {
  title: {
    type: Sequelize.TEXT,
    allowNull: false,
  },
  description: {
    type: Sequelize.TEXT,
    allowNull: false,
  }
})

module.exports = Image;
